const BASE_URL = "https://panda-market-api.vercel.app";
//https://www.jwt.io/
//토큰?

async function apiRequest(path, options = {}, isJson = true) {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`[${res.status}] ${errorText}`);
    }

    return isJson ? await res.json() : true;
  } catch (error) {
    console.error("API 요청 실패:", error.message);
    return null;
  }
}

export default apiRequest;
