import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 8px;
`;

const PageButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #dee2e6;
  background-color: white;
  color: #495057;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &.active {
    background-color: #3692ff;
    color: white;
    border-color: #3692ff;
  }

  &:not(:disabled):hover {
    background-color: #f1f3f5;
  }
`;

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
        &lt;
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
        &gt;
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;