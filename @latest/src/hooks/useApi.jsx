import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../utils/constants.js';

function useApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // endpoint가 없으면 API를 호출하지 않습니다.
    if (!endpoint) return;

    const execute = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        console.error(`API call to ${endpoint} failed:`, e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    execute();
  }, [endpoint]); // endpoint 주소가 바뀔 때마다 API를 다시 호출합니다.

  return { data, loading, error };
}

export default useApi;