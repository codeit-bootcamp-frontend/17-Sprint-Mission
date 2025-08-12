import styled from 'styled-components';
import ProductGrid from '../../components/products/ProductGrid.jsx';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/common/Dropdown.jsx';


export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  grid-area: title;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: 325px;
  grid-area: search;

   @media (max-width: 768px) {
    width: 242px;
  }

  @media (max-width: 370px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    pointer-events: none; /* Prevents the image from capturing click events */
`;


export const SearchInput = styled.input`
  padding: 9px 16px 9px 45px;
  border: 1px solid #F3F4F6;
  background-color: #F3F4F6;
  border-radius: 12px;
  width: 100%;
  height: 42px;
  font-size: 16px;
  font-weight: 400px;

  &::placeholder {
    color: #9CA3AF;
  }

  &:focus {
    outline: none;
    border-color: #3692FF;
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
  grid-area: button;
`;

export const SortDropdown = styled(Dropdown)`
  grid-area: sort;
  `;

export const TopBar = styled.div`
  position: relative;
  display: grid;
  min-height: 42px;
  align-items: center;
  width: 100%;
  align-items: center;  
  grid-template-areas: "title search button sort";
  grid-template-columns: 1fr auto auto auto;
  gap: 12px;

 @media (max-width: 370px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: none;
    grid-template-rows: auto auto; 
    
    & > ${SectionTitle} {
      grid-column: 1 / 2;  
      grid-row: 1; 
      width: 1fr;
    }

    & > ${AddItemButton} {
      grid-column: 2 / 4; 
      grid-row: 1;
      justify-self: end;
    }

    & > ${SearchInputContainer} {
      grid-column: 1 / 3;  
      grid-row: 2;
      width: 1fr;
    }
    
    & > ${SortDropdown} {
      grid-column: 3 / 4; 
      grid-row: 2;
      justify-self: end;
    }
  }
`;

// export const ActionButtons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;



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