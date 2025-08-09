import React from "react";
export const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="container pt-8">
      <ul className="flex items-center justify-center gap-2 font-medium text-white sm:gap-3">
        <li
          onClick={() => goToPage(currentPage - 1)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-n900 p-[14px] text-xl duration-500 hover:bg-b300"
        >
          <i className="ph ph-caret-left"></i>
        </li>

        {pageNumbers?.map((page) => (
          <li
            key={page}
            onClick={() => goToPage(page)}
            className={`flex size-12 cursor-pointer items-center justify-center rounded-full ${
              page === currentPage
                ? "bg-b300"
                : "bg-n900 duration-500 hover:bg-b300"
            }`}
          >
            {page}
          </li>
        ))}

        <li
          onClick={() => goToPage(currentPage + 1)}
          className="flex cursor-pointer items-center justify-center rounded-full bg-n900 p-[14px] text-xl duration-500 hover:bg-b300"
        >
          <i className="ph ph-caret-right"></i>
        </li>
      </ul>
    </div>
  );
};
