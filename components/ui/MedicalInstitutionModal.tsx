"use client";

import React, { useState } from 'react';

interface MedicalInstitutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearch: (value: boolean) => void;
  hasSearched: boolean;
  onSelect: (institution: Institution) => void;
}

export interface Institution {
  name: string;
  location: string;
}

export const MedicalInstitutionModal: React.FC<MedicalInstitutionModalProps> = ({
  isOpen,
  onClose,
  searchTerm,
  onSearchTermChange,
  onSearch,
  hasSearched,
  onSelect
}) => {
  const institutions: Institution[] = [
    { name: '강남고려병원', location: '서울 관악구 관악로242' },
    { name: '강남차병원', location: '서울 강남구 논현로 566' },
    { name: '강남세브란스병원', location: '서울 강남구 언주로 211' },
    { name: '삼성서울병원', location: '서울 강남구 일원로 81' },
    { name: '서울아산병원', location: '서울 송파구 올림픽로43길 88' },
    { name: '한양대병원', location: '서울 성동구 왕십리로 222-1' },
    { name: '고려대학교안암병원', location: '서울 성북구 고려대로 73' },
    { name: '연세세브란스병원', location: '서울 서대문구 연세로 50' },
    { name: '이대목동병원', location: '서울 양천구 안양천로 1071' },
    { name: '서울성모병원', location: '서울 서초구 반포대로 222' },
    { name: '중앙대학교병원', location: '서울 동작구 흑석로 102' },
    { name: '신촌세브란스병원', location: '서울 서대문구 연세로 50' },
  ];

  const [filteredInstitutions, setFilteredInstitutions] = useState<Institution[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(filteredInstitutions.length / itemsPerPage);

  const handleSearch = () => {
    const results = institutions.filter(
      (inst) =>
        inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inst.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInstitutions(results);
    setCurrentPage(1);
    onSearch(true);
  };

  const currentItems = filteredInstitutions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage, '...', totalPages);
      }
    }

    return pageNumbers;
  };

  if (!isOpen) return null;

  return (
    <div className="flex fixed top-0 left-0 justify-center items-center bg-zinc-900 bg-opacity-50 size-full z-50">
      <div className="bg-white rounded-3xl w-[604px] max-sm:m-5 max-sm:w-[90%]">
        <div className="relative px-8 pt-12 pb-0">
          <h2 className="mb-5 text-2xl font-bold text-zinc-900">
            의료 기관명을 선택해주세요
          </h2>
          <p className="text-base font-semibold text-slate-400">
            검색 결과가 없을 경우 '기타'를 선택해주세요.
          </p>
          <button
            onClick={onClose}
            className="absolute top-12 right-12 cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 10.8891L15.3336 7.55547C15.6404 7.24869 16.1378 7.24869 16.4445 7.55547C16.7513 7.86225 16.7513 8.35963 16.4445 8.6664L13.1109 12L16.4445 15.3336C16.7513 15.6404 16.7513 16.1378 16.4445 16.4445C16.1378 16.7513 15.6404 16.7513 15.3336 16.4445L12 13.1109L8.6664 16.4445C8.35963 16.7513 7.86225 16.7513 7.55547 16.4445C7.24869 16.1378 7.24869 15.6404 7.55547 15.3336L10.8891 12L7.55547 8.6664C7.24869 8.35963 7.24869 7.86224 7.55547 7.55547C7.86224 7.24869 8.35963 7.24869 8.6664 7.55547L12 10.8891Z"
                fill="#66798D"
              />
            </svg>
          </button>
        </div>
        <div className="px-8 py-7">
          <div className="flex gap-2 mb-12 max-sm:flex-col">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
                className="px-4 py-3.5 w-full h-12 text-base rounded-xl border border-solid border-zinc-200"
              />
              {searchTerm && (
                <button
                  className="absolute right-6 top-3.5 cursor-pointer"
                  onClick={() => onSearchTermChange('')}
                  aria-label="Clear search"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="12"
                      transform="matrix(0 -1 -1 0 24 24)"
                      fill="#F0F3FA"
                    />
                    <path
                      d="M16 8.00005L8 16M16 16L8 8"
                      stroke="#66798D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
            <button
              onClick={handleSearch}
              className="static top-2 right-2 px-3.5 py-3.5 h-12 text-sm text-white bg-sky-700 rounded-lg cursor-pointer border-[none] w-[60px] max-sm:w-full"
            >
              검색
            </button>
          </div>
          {hasSearched ? (
            <div>
              {filteredInstitutions.length > 0 ? (
                <>
                  <div className="mb-5">
                    <h3 className="text-lg font-bold text-zinc-900">
                      <span className='pr-3'>검색 결과</span>
                      <span className="text-sky-700">{filteredInstitutions.length}</span>
                      <span>건</span>
                    </h3>
                  </div>
                  <div className="flex items-center px-4 py-0 mb-5 h-12 rounded-xl bg-slate-100 bg-opacity-50 ">
                    <div className="text-sm font-bold text-zinc-900 w-[268px]">의료 기관명</div>
                    <div className="flex-1 text-sm font-bold text-zinc-900">소재지</div>
                  </div>
                  <div className="border-solid border-t-[0.4px] border-t-slate-200 border-t-opacity-40">
                    {currentItems.map((institution, index) => (
                      <div
                        key={index}
                        className="flex px-4 pt-6.5 border-solid border-b-[0.4px] border-b-slate-200 border-b-opacity-40 h-[68px]"
                        onClick={() => {
                        onSelect(institution);
                        onClose();
                      }}
                      >
                        <div className="text-sm text-slate-500 w-[338px]">
                          {institution.name}
                        </div>
                        <div className="flex-1 text-sm text-slate-500">
                          {institution.location}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1 items-start mt-5 justify-start">
                    <button
                      className="w-8 h-8 text-sm flex items-center justify-center text-slate-400"
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      ‹
                    </button>

                    {getPageNumbers().map((page, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 text-sm flex items-center justify-center rounded cursor-pointer ${page === currentPage
                          ? "text-black bg-gray-300 rounded-[50%]"
                          : "text-slate-500"
                          }`}
                        onClick={() =>
                          typeof page === "number" && setCurrentPage(page)
                        }
                      >
                        {page}
                      </div>
                    ))}

                    <button
                      className="w-8 h-8 text-sm flex items-center justify-center text-slate-400"
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      ›
                    </button>
                  </div>
                </>
              ) : (
                <div className="gap-1 items-start mt-5 justify-start">
                  <div className="px-2 py-0 mb-5">
                    <div className="mb-5">
                      <h3 className="text-lg font-bold leading-5 text-zinc-900">
                        <span>검색 결과</span>
                        <span className="text-sky-700">0</span>
                        <span>건</span>
                      </h3>
                    </div>
                    <div className="flex items-center h-12 rounded-xl bg-slate-100 bg-opacity-50">
                      <div className="flex-1 py-2.5 pr-0 pl-4 h-12 text-sm font-bold opacity-80 text-zinc-900">
                        의료 기관명
                      </div>
                      <div className="flex-1 py-2.5 pr-0 pl-4 h-12 text-sm font-bold opacity-80 text-zinc-900">
                        소재지
                      </div>
                    </div>
                  </div>
                  <p className="mx-0 my-5 text-base leading-7 text-center text-slate-500">
                    검색 결과가 없어요.
                  </p>

                  <button
                    className="px-2 py-3.5 mx-auto my-0 h-12 text-sm font-bold leading-6 text-sky-700 rounded-2xl bg-blue-200 bg-opacity-50 w-[120px] block">
                    기타 (직접 입력)
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="p-2 text-zinc-900">
              <h3 className="mb-4 text-xl font-bold text-sky-700">Tip</h3>
              <div>
                <h4 className="mb-1 text-sm font-semibold">의료 기관명 or 소재지</h4>
                <p className="text-sm text-slate-400">
                  예) 가톨릭대학교 서울성모병원 or 서초구 반포대로 222
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
