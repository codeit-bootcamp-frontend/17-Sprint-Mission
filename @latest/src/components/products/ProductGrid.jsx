import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  gap: 30px 20px;
`;

const Card = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f8f9fa;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding: 15px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin: 0 0 5px 0;
  font-weight: 500;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const ProductLikes = styled.div`
  font-size: 13px;
  color: #868e96;
  padding: 0 15px 15px 15px;
  margin-top: auto;
  &::before {
    content: '♡';
    margin-right: 5px;
  }
`;

const ProductCard = ({ product }) => {
  const hasImage = product.images && product.images.length > 0;
  return (
    <Card>
      <ImageContainer>
        {hasImage && <img src={product.images[0]} alt={product.name} />}
      </ImageContainer>
      <CardBody>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
      </CardBody>
      <ProductLikes>{product.favoriteCount || 0}</ProductLikes>
    </Card>
  );
};

const ProductGrid = ({ products, className }) => (
  <Grid className={className}>
    {products && products
      .filter(p => p && p.id)
      .map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
  </Grid>
);

export default ProductGrid;