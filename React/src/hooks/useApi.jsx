import { useState } from 'react';
import { API_BASE_URL } from '../utils/constants.js';

// This hook now returns a function to execute the API call on demand
function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // The 'options' object can include method, body, headers, etc.
  const execute = async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options, // Spread any options like method: 'POST'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
      return result;

    } catch (e) {
      setError(e);
      throw e; // Re-throw so the component knows it failed
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, error, data };
}

export default useApi;