import React from 'react';
import styled from 'styled-components';
import arrowLeft from'../../icon/ic_arrow_left.svg'
import arrowRight from'../../icon/ic_arrow_right.svg'

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageGroupSize = 5;

  const startPage = Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {/* Previous Arrow Button */}
      <PageButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        <img src={arrowLeft} alt="이전" />
      </PageButton>

      {/* Page Number Buttons */}
      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </PageButton>
      ))}

      {/* Next Arrow Button */}
      <PageButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
        <img src={arrowRight} alt="다음"/>
      </PageButton>
    </PaginationContainer>
  );
};

//design

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 8px;
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 40px;
  height: 40px;
  border: 1px solid #E5E7EB;
  background-color: #FFFFFF;
  color: #6B7280;
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &.active {
    background-color: #2F80ED;
    color: white;
    border-color: #2F80ED;
  }

  &:not(:disabled):hover {
    background-color: #f1f3f5;
    color: #6B7280;
    border-color: #E5E7EB;
  }
`;


export default Pagination;