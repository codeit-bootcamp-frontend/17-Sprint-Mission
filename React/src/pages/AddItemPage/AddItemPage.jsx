import React from 'react'; 
import { Form, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import TextInput from '../../components/common/Inputs/TextInput.jsx';
import TagInput from '../../components/common/Inputs/TagInput.jsx';
import ImageInput from '../../components/common/Inputs/ImageInput.jsx';
import { uploadImages, createProduct } from '../../hooks/productApi.jsx'; 


const AddItemPage = () => {
    const Navigate = useNavigate();
  const [product, setProduct] = useState({
    images: [],
    name: '',
    description: '',
    price: '',
    tags: [], 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // TextInput, TextAreaInput을 위한 공통 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };
  
  // TagInput을 위한 핸들러 (태그 목록 전체를 받아서 업데이트)
  const handleTagsChange = (newTags) => {
    setProduct(prev => ({ ...prev, tags: newTags }));
  };

  // ImageInput을 위한 핸들러
  const handleImagesChange = (newImages) => {
    setProduct(prev => ({ ...prev, images: newImages }));
  };

  // 등록 버튼 활성화 로직 (이미지, 태그 제외)
  const isFormInvalid = !product.name || !product.description || !product.price;

  // 폼 제출 핸들러 (auth 문제로 미완성)
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if (isFormInvalid) return;
    // 예시: API 호출 후 초기화
    setIsSubmitting(true);

    try {
    // 이미지 업로드
    const imageUrls = await uploadImages(product.images);
    // 이미지 URL을 포함한 최종 상품 데이터 생성
    const newProductData = {
        ...product,
        images: imageUrls, // 업로드된 이미지 URL들
    };
    // 상품 등록 API 호출
    const newProduct = await createProduct(newProductData);
    Navigate(`/items/${newProduct.id}`); // 등록 후 상품 목록 페이지로 이동

    } catch (error) {
      console.error('상품 등록 실패:', error);
      // 에러 처리 로직 추가 가능
    }
    finally {
      setIsSubmitting(false);
  };
    };


  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <PageHeader>
        <h1>상품 등록하기</h1>
        <SubmitButton type="submit" disabled={isFormInvalid}>
          등록
        </SubmitButton>
      </PageHeader>

        <ImageInput 
          images={product.images}
          onImagesChange={handleImagesChange}
          label="상품 이미지 업로드"
        />
        <TextInput
          label="상품명"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="상품명을 입력해주세요"
        />
        <TextInput
          as="textarea"
          label="상품 소개"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="상품 소개를 입력해주세요"
        />
        <TextInput
          label="판매가격"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          placeholder="판매 가격을 입력해주세요"
        />
        <TagInput 
          tags={product.tags}
          onTagsChange={handleTagsChange}
        />
      </StyledForm>
      </>
  );
}

//design
const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #F3F4F6;
  background-color: #3692FF;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:disabled {
    background-color: #9CA3AF;
    cursor: not-allowed;
  }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;



export default AddItemPage;