import React from "react";
import PaginationPrevIcon from "./icons/PaginationPrevIcon";
import PaginationNextIcon from "./icons/PaginationNextIcon";

const Pagination: React.FC = () => {
  return (
    <nav className="box-border flex gap-1 justify-start items-start p-0 m-0 mt-16 max-sm:mt-8" aria-label="Pagination">
      <button className="box-border flex justify-center items-center p-2.5 m-0 w-8 h-8 rounded-lg" aria-label="Previous page">
        <PaginationPrevIcon />
      </button>

      {[1, 2, 3, 4, 5, 6, 7].map((page) => (
        <button
          key={page}
          className="box-border p-2.5 m-0 w-8 h-8 text-sm font-semibold rounded-lg cursor-pointer text-slate-400"
          aria-label={`Page ${page}`}
        >
          {page}
        </button>
      ))}

      <span className="box-border p-2.5 m-0 w-8 h-8 text-sm font-semibold rounded-lg cursor-pointer text-slate-400">
        ...
      </span>

      <button
        className="box-border p-2.5 m-0 w-8 h-8 text-sm font-semibold rounded-lg cursor-pointer text-slate-400"
        aria-label="Page 197"
      >
        197
      </button>

      <button className="box-border flex justify-center items-center p-2.5 m-0 w-8 h-8 rounded-lg" aria-label="Next page">
        <PaginationNextIcon />
      </button>
    </nav>
  );
};

export default Pagination;
