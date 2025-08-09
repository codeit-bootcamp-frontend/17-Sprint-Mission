import { useState } from 'react';

function useAsync(asyncFunction) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async (...args) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const result = await asyncFunction(...args);
      setData(result);
      return result;
    } catch (e) {
      setError(e);
      throw e; 
    } finally {
      setLoading(false);
    }
  };

  // We return the 'execute' function so we can call it from our component
  return { execute, loading, error, data };
}

export default useAsync;