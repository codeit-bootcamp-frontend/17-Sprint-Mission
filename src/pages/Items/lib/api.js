import { BASE_API_URL } from '@/apis/constants';
import { customFetch } from '@/apis/customFetch';
import { DEFAULT_VALUES } from '@/pages/Items/lib/constants';

export const getProducts = async ({
  page = DEFAULT_VALUES.page,
  pageSize = DEFAULT_VALUES.pageSize,
  orderBy = DEFAULT_VALUES.orderBy,
  keyword = DEFAULT_VALUES.keyword,
}) => {
  const data = await customFetch(
    `${BASE_API_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
  );
  return data;
};
