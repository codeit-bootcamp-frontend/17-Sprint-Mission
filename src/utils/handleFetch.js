//api 연결

export const handleFetch = async ({ fetchFn, onSuccess, onError }) => {
  try {
    const result = await fetchFn();

    if (result) {
      onSuccess?.(result);
    } else {
      throw new Error("요청 실패");
    }
  } catch (err) {
    console.error("요청 실패:", err.message);
    onError?.(err.message);
  }
};
