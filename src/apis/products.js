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
