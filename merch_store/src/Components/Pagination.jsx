import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="paginationBtn">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(page);
                window.scrollTo(0, 0);
              }}
              className={page == currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
