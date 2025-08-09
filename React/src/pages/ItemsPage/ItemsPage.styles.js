import styled from 'styled-components';
import ProductGrid from '../../components/products/ProductGrid.jsx';
import { Link } from 'react-router-dom';

export const ItemsPageContainer = styled.div`
  max-width: 1200px;
  margin: 24px auto 58px;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;


export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const TopBar = styled.div`
  display: flex;
  height: 42px;
  // border: 1px solid red;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SearchInput = styled.input`
  padding: 9px 20px 9px 16px;
  border: none;
  background-color: #F3F4F6;
  border-radius: 12px;
  width: 325px;
  height: 42px;
  font-size: 16px;
  font-weight: 400px;

  &::placeholder {
    color: #9CA3AF;
  }

`;


export const AddItemButton = styled(Link)`
  padding: 8px 23px;
  background-color: #3692FF;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  width: 133px;
  font-size: 16px;
`;

export const BestProductGrid = styled(ProductGrid)`
  grid-template-columns: repeat(4, 1fr);
   
  
  @media ${props => props.theme.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
    
  @media ${props => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AllProductGrid = styled(ProductGrid)`
  grid-template-columns: repeat(5 , 1fr);
  @media ${props => props.theme.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${props => props.theme.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;