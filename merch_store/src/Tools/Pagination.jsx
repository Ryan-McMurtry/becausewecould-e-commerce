import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  refresh
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const refreshHandler = () => {
    if(!refresh) {
      window.scrollTo(0, 0);
    }
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
                refreshHandler()
              }}
              className={page === currentPage ? "active" : ""}
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
