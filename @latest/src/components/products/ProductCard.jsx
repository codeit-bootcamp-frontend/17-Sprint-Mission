import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 10px;
  text-align: left;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;

const ProductCard = ({ product }) => {

  return (
    <Card>
      <CardBody>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
      </CardBody>
      <ProductLikes>{product.favoriteCount || 0}</ProductLikes>
    </Card>
  );
};

export default ProductCard;