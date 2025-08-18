import React, { useState } from 'react';
import useApi from '../../hooks/useApi.jsx';
import useResponsiveDisplay from '../../hooks/useResponsiveDisplay.jsx'; // 새로 만든 훅 임포트
import { endpoints } from '../../api/endpoints.js';
import ProductGrid from '../../components/products/ProductGrid.jsx';
import Pagination from '../../components/common/Pagination.jsx';
import { PRODUCTS_PER_PAGE } from '../../utils/constants.js';
import {
  ItemsPageContainer,
  SectionTitle,
  TopBar,
  SearchAndSort,
  SearchInput,
  SortDropdown,
  AddItemButton,
  BestProductGrid,
  AllProductGrid
} from './ItemsPage.styles.js';

const ItemsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState('recent');

  // ✅ 한 줄로 반응형 로직 처리
  const { bestProductsToDisplayCount, productsToDisplayCount } = useResponsiveDisplay();

  // 기존의 width state, useEffect, useMemo 로직은 모두 삭제되었습니다.

  const {
    data: bestProductsData,
    loading: bestProductsLoading,
    error: bestProductsError
  } = useApi(endpoints.products.getBest());

  const {
    data: productsData,
    loading: productsLoading,
    error: productsError
  } = useApi(endpoints.products.getPaginated(currentPage, orderBy));

  const allBestProducts = bestProductsData?.list || [];
  const allFetchedProducts = productsData?.list || [];
  const totalCount = productsData?.totalCount || 0;

  // ✅ 훅에서 받아온 값으로 상품 슬라이스
  const bestProductsToDisplay = allBestProducts.slice(0, bestProductsToDisplayCount);
  const productsToDisplay = allFetchedProducts.slice(0, productsToDisplayCount);

  if (bestProductsError || productsError) {
    return <p>상품을 불러오는 데 실패했습니다. 다시 시도해주세요.</p>;
  }

  return (
    <ItemsPageContainer>
      <SectionTitle>베스트 상품</SectionTitle>
      {bestProductsLoading ? <p>로딩 중...</p> : <BestProductGrid products={bestProductsToDisplay} />}

      <SectionTitle style={{ marginTop: '60px' }}>전체 상품</SectionTitle>
      <TopBar>
        <SearchAndSort>
          <SearchInput type="text" placeholder="검색할 상품을 입력해주세요" />
          <SortDropdown onChange={(e) => setOrderBy(e.target.value)} value={orderBy}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </SortDropdown>
        </SearchAndSort>
        <AddItemButton to="/additem">상품 등록하기</AddItemButton>
      </TopBar>
      
      {productsLoading ? <p>페이지 로딩 중...</p> : <AllProductGrid products={productsToDisplay} />}

      {!productsLoading && (
        <Pagination
          productsPerPage={PRODUCTS_PER_PAGE}
          totalProducts={totalCount}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </ItemsPageContainer>
  );
};

export default ItemsPage;