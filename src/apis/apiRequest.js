const BASE_URL = "https://panda-market-api.vercel.app";
//https://www.jwt.io/
//토큰?

async function apiRequest(path, options = {}, isJson = true) {
  try {
    const token = localStorage.getItem("accessToken");

    console.log(localStorage.getItem("accessToken"));
    const headers = {
      ...(options.headers || {}),
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    // FormData 이미지는 json이 아니다.
    let body = options.body;
    if (!(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const error_text = await res.text();
      throw new Error(`[${res.status}] ${error_text}`);
    }

    return isJson ? await res.json() : true;
  } catch (error) {
    console.error("API 요청 실패:", error.message);
    return null;
  }
}

export default apiRequest;
