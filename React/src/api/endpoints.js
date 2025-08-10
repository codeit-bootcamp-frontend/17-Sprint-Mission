import { PRODUCTS_PER_PAGE } from '../utils/constants.js';

export const endpoints = {
  products: {
    getPaginated: (page, orderBy) =>
      `/products?page=${page}&pageSize=${PRODUCTS_PER_PAGE}&orderBy=${orderBy}`,

    getBest: () =>
      '/products?page=1&pageSize=4&orderBy=favorite',

    toggleFavorite: (productId) =>
      `/products/${productId}/favorite`,
  },
};