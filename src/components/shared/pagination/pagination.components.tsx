import { PaginationProps } from './pagination.interface';
import PaginationStyles from './pagination.styles';
import React from 'react';

const Pagination: React.FC<PaginationProps> = ({ handleChange, totalPages, currentPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      handleChange(currentPage - 1);
    }
  };
  const handleNum = (pageNum: number) => {
    handleChange(pageNum);
  };
  const handleNext = () => {
    if (totalPages > currentPage) {
      handleChange(currentPage + 1);
    }
  };
  return (
    <PaginationStyles className="pagination">
      <button className="prev-btn" onClick={handlePrev}>
        Prev
      </button>
      <div className="number-cont">
        {[...Array(totalPages)].map((e, i) => (
          <button
            key={`pagination-${e}-${i}`}
            className={`number-btn ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => handleNum(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </PaginationStyles>
  );
};

export default Pagination;
