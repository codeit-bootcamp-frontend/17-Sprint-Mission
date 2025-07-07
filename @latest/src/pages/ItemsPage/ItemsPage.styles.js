import styled from 'styled-components';
import ProductGrid from '../../components/products/ProductGrid.jsx';

export const ItemsPageContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchAndSort = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  width: 250px;
  font-size: 15px;
`;

export const SortDropdown = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
`;

export const AddItemButton = styled.a`
  padding: 10px 20px;
  background-color: #3692FF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
`;

export const BestProductGrid = styled(ProductGrid)`
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AllProductGrid = styled(ProductGrid)`
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;