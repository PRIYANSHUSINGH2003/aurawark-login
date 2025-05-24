import React from "react";
import PaginationPrevIcon from "./icons/PaginationPrevIcon";
import PaginationNextIcon from "./icons/PaginationNextIcon";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i <= 5 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav className="box-border flex gap-1 justify-start items-start mt-16 max-sm:mt-8" aria-label="Pagination">
      <button
        className="p-2.5 w-8 h-8 rounded-lg"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        <PaginationPrevIcon />
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="p-2.5 w-8 h-8 text-slate-400">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`px-2 w-8 h-8 text-sm font-semibold rounded-[50%] ${
              page === currentPage ? "bg-slate-300 text-gray-800" : "text-slate-400"
            }`}
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </button>
        )
      )}

      <button
        className="p-2.5 w-8 h-8 rounded-lg"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        <PaginationNextIcon />
      </button>
    </nav>
  );
};

export default Pagination;
