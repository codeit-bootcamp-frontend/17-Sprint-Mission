// PRODUCTS_PER_PAGE 상수를 import 합니다.
import { PRODUCTS_PER_PAGE } from '../utils/constants.js';

export const endpoints = {
  products: {
    // 이제 이 함수는 page와 orderBy만 받습니다.
    getPaginated: (page, orderBy) =>
      `/products?page=${page}&pageSize=${PRODUCTS_PER_PAGE}&orderBy=${orderBy}`,

    getBest: () =>
      '/products?page=1&pageSize=4&orderBy=favorite',

     // This function creates the URL for the favorite action.
    toggleFavorite: (productId) =>
      `/products/${productId}/favorite`,
  },
};