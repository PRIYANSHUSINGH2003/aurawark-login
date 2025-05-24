import React from "react";

interface PageHeaderProps {
  onMenuClick: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onMenuClick }) => {
  return (
    <header
      className="box-border fixed right-0 left-60 z-40 p-0 pl-8 m-0 w-full h-12 text-sm font-medium leading-6 border-b border-solid bg-slate-50 border-b-slate-100 text-slate-500 top-[72px] max-md:left-0"
    >
        <span className="hidden md:block">홈</span>
      <button
        onClick={onMenuClick}
        className="md:hidden mr-4 bg-transparent border-none text-sky-600 font-bold"
      >
        홈
      </button>
    </header>
  );
};

export default PageHeader;
