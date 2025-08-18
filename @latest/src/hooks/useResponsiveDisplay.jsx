// src/hooks/useResponsiveDisplay.js

import { useState, useEffect, useMemo } from 'react';

const useResponsiveDisplay = () => {
  // 1. 화면 너비를 추적하는 state
  const [width, setWidth] = useState(window.innerWidth);

  // 2. resize 이벤트를 감지하여 width를 업데이트하는 effect
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    return () => window.removeEventListener('resize', handleResize);
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

  // 3. 화면 너비(width)에 따라 베스트 상품 개수를 계산
  const bestProductsToDisplayCount = useMemo(() => {
    if (width > 1024) return 4;
    if (width > 768) return 2;
    return 1;
  }, [width]);

  // 4. 화면 너비(width)에 따라 전체 상품 개수를 계산
  const productsToDisplayCount = useMemo(() => {
    if (width > 1024) return 10;
    if (width > 768) return 6;
    return 4;
  }, [width]);

  // 5. 계산된 값들을 객체 형태로 반환
  return { bestProductsToDisplayCount, productsToDisplayCount };
};

export default useResponsiveDisplay;