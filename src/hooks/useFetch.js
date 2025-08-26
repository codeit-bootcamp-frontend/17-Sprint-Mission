import { useCallback, useEffect, useState } from 'react';

export default function useFetch({
  asyncFunction,
  deps = [],
  immediate = false,
}) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const refetch = useCallback(async () => {
    setState((prev) => ({ ...prev, error: null, loading: true }));
    try {
      const response = await asyncFunction();
      setState((prev) => ({ ...prev, loading: false, data: response }));
    } catch (error) {
      setState({ data: null, loading: false, error });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  useEffect(() => {
    if (immediate) refetch();
  }, [immediate, refetch]);

  return { ...state, refetch };
}
export function useQuery({ queryFn, deps = [] }) {
  const { loading, error, data, refetch } = useFetch({
    asyncFunction: queryFn,
    immediate: true,
    deps,
  });
  return { loading, error, data, refetch };
}

export function useMutation({ mutationFn, deps = [] }) {
  const {
    loading,
    error,
    data,
    refetch: mutate,
  } = useFetch({
    asyncFunction: mutationFn,
    immediate: false,
    deps,
  });
  return { loading, error, data, mutate };
}
