import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 40px 24px;

  @media ${props => props.theme.mobile} {
    gap: 40px 16px;
  }

`;

export const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f8f9fa;
  overflow: hidden;
  border-radius: 16px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px; 
`;

export const ProductName = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
`;