import { BASE_API_URL } from '@/apis/constants';
import { customFetch } from '@/apis/customFetch';

export const getProduct = async ({ productId }) => {
  const data = await customFetch(`${BASE_API_URL}/products/${productId}`);
  return data;
};
export const getComments = async ({ productId, limit = 8, cursor = '' }) => {
  const data = await customFetch(
    `${BASE_API_URL}/products/${productId}/comments?limit=${limit}&curosr=${cursor}`
  );
  return data;
};
