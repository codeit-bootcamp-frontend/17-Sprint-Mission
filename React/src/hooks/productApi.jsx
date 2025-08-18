import axios from 'axios';
import { endpoints } from '../api/endpoints'; 
import { API_BASE_URL } from '../utils/constants'; 


// 이미지 업로드 함수
export const uploadImages = async (files) => {
  const uploadPromises = files.map(image => {
    const formData = new FormData();
    formData.append('image', image.file); 
    
    const endpointUrl = `${API_BASE_URL}${endpoints.images.upload()}`;
    return axios.post(endpointUrl, formData); // 개별 API 호출
  });

  try {
    const responses = await Promise.all(uploadPromises);
    const imageUrls = responses.map(response => response.data.url);
    return imageUrls;

  } catch (error) {
    console.error('하나 이상의 이미지 업로드 실패:', error);
    throw error; // 에러를 상위로 전달하여 handleSubmit에서 처리하게 함
  }
};

// 상품 등록 함수
// 이 함수는 이미지 URL을 포함한 상품 데이터를 받아서 API에 POST 요청을 보냅니다.
export const createProduct = async (productData) => {
  const endpointUrl = `${API_BASE_URL}${endpoints.products.create()}`;
  const response = await axios.post(endpointUrl, productData);
  return response.data;
};