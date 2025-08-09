import React from 'react';
import LikeButton from '../common/LikeButton.jsx';
import {
  Grid,
  Card,
  ImageContainer,
  CardBody,
  ProductName,
  ProductPrice,
} from './ProductGrid.styles.js';


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
        <LikeButton initialLikes={product.favoriteCount||0}/>
      </CardBody>
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