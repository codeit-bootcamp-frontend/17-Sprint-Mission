import React, { useState, useEffect } from 'react';
import useApi from '../../hooks/useApi.jsx';
import useResponsiveDisplay from '../../hooks/useResponsiveDisplay.jsx';
import { endpoints } from '../../api/endpoints.js';
import ProductGrid from '../../components/products/ProductGrid.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import { PRODUCTS_PER_PAGE } from '../../utils/constants.js';
import { Link } from 'react-router-dom';
import {
  SectionTitle,
  TopBar,
  SearchInput,
  AddItemButton,
  BestProductGrid,
  AllProductGrid,
  SectionContainer,
  ActionButtons,
} from './ItemsPage.styles.js';
import Dropdown from '../../components/common/Dropdown.jsx';

const ItemsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState('recent');
  const { bestProductsToDisplayCount, productsToDisplayCount } = useResponsiveDisplay();

  // API calls
  const { execute: getBestProducts, data: bestProductsData, loading: bestProductsLoading, error: bestProductsError } = useApi();
  const { execute: getPaginatedProducts, data: productsData, loading: productsLoading, error: productsError } = useApi();

  // Sort
  useEffect(() => {
    getPaginatedProducts(endpoints.products.getPaginated(currentPage, orderBy));
  }, [currentPage, orderBy]);

  useEffect(() => {
    getBestProducts(endpoints.products.getBest());
  }, []);

  const allBestProducts = bestProductsData?.list || [];
  const allFetchedProducts = productsData?.list || [];
  const totalCount = productsData?.totalCount || 0;

  const bestProductsToDisplay = allBestProducts.slice(0, bestProductsToDisplayCount);
  const productsToDisplay = allFetchedProducts.slice(0, productsToDisplayCount);

  if (bestProductsError || productsError) {
    return <p>상품을 불러오는 데 실패했습니다. 다시 시도해주세요.</p>;
  }

  const dropdownOptions = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];  

  return (
     <>
      <SectionContainer>
      <SectionTitle>베스트 상품</SectionTitle>
      {bestProductsLoading ? <p>로딩 중...</p> : <BestProductGrid products={bestProductsToDisplay} />}
      </SectionContainer>

      <SectionContainer>
      <TopBar>
        <SectionTitle>전체 상품</SectionTitle>
          <ActionButtons>
          <SearchInput type="text" placeholder="검색할 상품을 입력해주세요" />
          <AddItemButton to="/additem">상품 등록하기</AddItemButton>
          <Dropdown
            options={dropdownOptions}
            defaultOption={dropdownOptions[0]}
            onSelect={(option) => {
              setOrderBy(option.value);
              setCurrentPage(1); // Reset to first page when sorting changes
            }}
          />
          </ActionButtons>
      </TopBar>
      
      {productsLoading ? <p>페이지 로딩 중...</p> : <AllProductGrid products={productsToDisplay} />}
      </SectionContainer>

      {!productsLoading && (
        <Pagination
          productsPerPage={PRODUCTS_PER_PAGE}
          totalProducts={totalCount}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      </>
  );
};

export default ItemsPage;