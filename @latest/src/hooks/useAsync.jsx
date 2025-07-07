import { useState, useEffect } from 'react';

function useAsync(asyncFunction, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const execute = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await asyncFunction();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    execute();
  // This hook will re-run the async function whenever a dependency in the 'deps' array changes.
  }, deps);

  return { data, loading, error };
}

export default useAsync;