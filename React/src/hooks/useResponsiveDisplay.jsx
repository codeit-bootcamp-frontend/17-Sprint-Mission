// src/hooks/useResponsiveDisplay.js

import { useState, useEffect, useMemo } from 'react';

const useResponsiveDisplay = () => {
  const [width, setWidth] = useState(window.innerWidth);

  //resize 이벤트를 감지하여 width를 업데이트
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  // 화면 너비(width)에 따라 베스트 상품 개수를 계산
  const bestProductsToDisplayCount = useMemo(() => {
    if (width > 1024) return 4;
    if (width > 768) return 2;
    return 1;
  }, [width]);

  // 화면 너비(width)에 따라 전체 상품 개수를 계산
  const productsToDisplayCount = useMemo(() => {
    if (width > 1024) return 10;
    if (width > 768) return 6;
    return 4;
  }, [width]);

  // 계산된 값들을 객체 형태로 반환
  return { bestProductsToDisplayCount, productsToDisplayCount };
};

export default useResponsiveDisplay;