import apiRequest from "@/apis/apiRequest";

//상품 전체 조회
export const getProducts = ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  const validOrder = orderBy === "favorite" ? "favorite" : "recent";

  return apiRequest(
    `/products?page=${page}&pageSize=${pageSize}&orderBy=${validOrder}&keyword=${keyword}`
  );
};

export const postProduct = (data) =>
  apiRequest(`/products`, {
    method: "POST",
    body: JSON.stringify(data),
  });

//특정 상품
export const getProductById = (id) => apiRequest(`/products/${id}`);

//상품 수정
export const patchProduct = (id, data) =>
  apiRequest(`/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

//상품 삭제
export const deleteProduct = (id) =>
  apiRequest(`/products/${id}`, { method: "DELETE" }, false);

//favorite 추가
export const postFavorite = (id, data) =>
  apiRequest(`/products/${id}/favorite`, { method: "POST" });

//facorite 삭제

export const deleteFavorite = (id) =>
  apiRequest(`/products/${id}/favorite`, { method: "DELETE" }, false);
