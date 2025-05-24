import React, { useState } from "react";
import PatientTable from "./PatientTable";
import Pagination from "./Pagination";
import SearchIcon from "./icons/SearchIcon";
import FilterIcon from "./icons/FilterIcon";

// sample data import
import { patientData } from "./PatientTable";

const ITEMS_PER_PAGE = 5;

const PatientListSection: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter data based on search query (by patient name, case-insensitive)
    const filteredData = patientData.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <section className="box-border p-0 m-0 mb-16">
            <div className="box-border flex justify-between items-center p-0 m-0 mb-7 max-md:flex-col max-md:gap-4 max-md:items-start">
                <div className="flex gap-2 font-bold text-gray-900">
                    <h2 className="box-border p-0 m-0 text-3xl font-bold leading-10 text-zinc-900 max-sm:text-2xl max-sm:leading-8">
                        환자 명단
                    </h2>
                    <p className="box-border pt-2 m-0 ml-4 text-2xl leading-7 text-slate-500 max-sm:mt-1 max-sm:text-lg">
                        (최근 3개월 기준)
                    </p>
                </div>
                <button className="box-border gap-2.5 px-6 py-3.5 m-0 text-sm font-bold leading-6 text-white bg-sky-700 rounded-2xl cursor-pointer">
                    환자 등록하기
                </button>
            </div>

            <div className="box-border px-8 py-9 m-0 bg-white rounded-2xl shadow-2xl max-sm:overflow-x-auto max-sm:px-4 max-sm:py-6">
                <div className="box-border flex justify-between items-center p-0 m-0 mb-7">
                    <div className="box-border flex gap-2 items-center p-0 m-0">
                        <h3 className="box-border p-0 m-0 text-2xl font-bold leading-5 text-zinc-900">
                            미처방
                        </h3>
                        <span className="box-border p-0 m-0 text-2xl font-bold leading-5 text-sky-700">
                            2712
                        </span>
                        <span className="box-border p-0 m-0 text-2xl font-bold leading-5 text-zinc-900">
                            명
                        </span>
                        <label className="box-border flex gap-2 items-center px-4 m-0 cursor-pointer">
                            <div className="box-border flex justify-center items-center p-0 m-0 w-4 h-4 rounded bg-slate-100">
                                <FilterIcon />
                            </div>
                            <span className="box-border p-0 m-0 text-sm font-medium leading-4 text-slate-400">
                                내 환자만 보기
                            </span>
                        </label>
                    </div>

                    <div className="box-border flex gap-4 items-center p-0 m-0 max-md:flex-col max-md:gap-3">
                        <div className="box-border flex gap-2 items-center px-3 py-0 m-0 h-10 rounded-2xl bg-slate-100 w-[272px] max-md:w-full">
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="검색"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1); // Reset to page 1 on new search
                                }}
                                className="bg-transparent outline-none border-none text-sm text-slate-700 placeholder-slate-400 w-full"
                            />
                        </div>

                    </div>
                </div>

                <PatientTable data={currentData} />
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </section>
    );
};

export default PatientListSection;
