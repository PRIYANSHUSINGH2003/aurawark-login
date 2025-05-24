"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import HomeIcon from "./icons/HomeIcon";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(true);
    const [isDropdownOpen2, setDropdownOpen2] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    const getActiveItem = () => {
        if (pathname.startsWith("/doctor/management/patient")) return "prescription-history";
        if (pathname === "/doctor/standard-treatment") return "standard-treatment";
        if (pathname === "/doctor/home") return "home";
        if (pathname === "/doctor/my/health-status") return "health-status";
        return "";
    };

    const activeItem = getActiveItem();
    const activeClass = "bg-[#EEF4FF] text-[#2B61FF] font-semibold";

    const handleRedirect = (itemId: string, path: string) => {
        router.push(path);
    };

    return (
        <nav
            className={`box-border fixed left-0 z-50 px-0 py-2 m-0 w-60 bg-white border-solid border-r-[0.5px] border-r-zinc-200 h-[calc(100vh_-_72px)] top-[72px] 
        max-md:transition-transform max-md:duration-300 max-md:ease-in-out ${isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"
                }`}
        >
            <ul className="p-0 m-0 list-none">
                <li className="box-border relative p-0 m-0 w-full h-12">
                    <div className={`box-border absolute top-0 left-6 p-0 m-0 w-48 h-12 ${activeItem === "home" ? activeClass : "hover:bg-indigo-50"
                        } rounded-xl`} onClick={() => handleRedirect("home", "/doctor/home")} />
                    <a
                        href="/doctor/home"
                        className="box-border flex absolute top-3.5 left-10 gap-2 items-center p-0 m-0 h-5"
                        onClick={onClose}
                    >
                        <HomeIcon />
                        <span className="box-border p-0 m-0 text-sm font-bold tracking-wide leading-6 text-sky-700">
                            홈
                        </span>
                    </a>
                </li>
                <li className="box-border relative p-0 m-0 w-full h-12">
                    {/* Sidebar Item - Dropdown */}
                    <div
                        className={`flex items-center justify-between w-full h-12 px-10 rounded-[10px] cursor-pointer hover:bg-[#EEF4FF]`}
                        onClick={() => {
                            setDropdownOpen(!isDropdownOpen);
                        }}
                    >
                        <div className="flex items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.2727 17.654H2.72727C2.32582 17.654 2 17.3423 2 16.9583V3.04526C2 2.66126 2.32582 2.34961 2.72727 2.34961H17.2727C17.6742 2.34961 18 2.66126 18 3.04526V16.9583C18 17.3423 17.6742 17.654 17.2727 17.654ZM3.45455 16.2627H16.5455V3.74091H3.45455V16.2627Z" fill="#8395AC" />
                                <path d="M14.3608 14.8718H5.63352C5.23207 14.8718 4.90625 14.5601 4.90625 14.1761C4.90625 13.7921 5.23207 13.4805 5.63352 13.4805H14.3608C14.7622 13.4805 15.0881 13.7921 15.0881 14.1761C15.0881 14.5601 14.7622 14.8718 14.3608 14.8718Z" fill="#8395AC" />
                                <path d="M14.3608 12.0886H5.63352C5.23207 12.0886 4.90625 11.7769 4.90625 11.3929C4.90625 11.0089 5.23207 10.6973 5.63352 10.6973H14.3608C14.7622 10.6973 15.0881 11.0089 15.0881 11.3929C15.0881 11.7769 14.7622 12.0886 14.3608 12.0886Z" fill="#8395AC" />
                                <path d="M14.3608 9.30537H5.63352C5.23207 9.30537 4.90625 8.99371 4.90625 8.60971C4.90625 8.22571 5.23207 7.91406 5.63352 7.91406H14.3608C14.7622 7.91406 15.0881 8.22571 15.0881 8.60971C15.0881 8.99371 14.7622 9.30537 14.3608 9.30537Z" fill="#8395AC" />
                                <path d="M9.99716 6.52412H5.63352C5.23207 6.52412 4.90625 6.21246 4.90625 5.82846C4.90625 5.44446 5.23207 5.13281 5.63352 5.13281H9.99716C10.3986 5.13281 10.7244 5.44446 10.7244 5.82846C10.7244 6.21246 10.3986 6.52412 9.99716 6.52412Z" fill="#8395AC" />
                            </svg>
                            <span className="text-[#66798D] font-medium text-sm tracking-wide px-2">처방 관리</span>
                        </div>
                        {isDropdownOpen ? (
                            <FaChevronUp className="text-[#8395AC] w-3 h-3" />
                        ) : (
                            <FaChevronDown className="text-[#8395AC] w-3 h-3" />
                        )}
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="hidden lg:block ml-10 bg-white rounded-md overflow-hidden transition-all duration-300 ease-in-out">
                            <ul className="flex flex-col space-y-1 py-2">
                                <li className={`px-4 py-2 ${activeItem === "prescription-history"
                                    ? activeClass
                                    : "hover:bg-[#EEF4FF]"
                                    } rounded-md cursor-pointer text-[#66798D] text-sm`} onClick={() => handleRedirect("prescription-history", "/doctor/management/patient")}>처방 내역</li>
                                <li className={`px-4 py-2 ${activeItem === "standard-treatment"
                                    ? activeClass
                                    : "hover:bg-[#EEF4FF]"
                                    } rounded-md cursor-pointer text-[#66798D] text-sm`} onClick={() => handleRedirect("standard-treatment", "/doctor/standard-treatment")}>표준 치료 프로그램</li>
                            </ul>
                        </div>
                    )}
                    {/* Sidebar Item - Dropdown */}
                    <div
                        className={`flex items-center justify-between w-full h-12 px-10 rounded-[10px] cursor-pointer hover:bg-[#EEF4FF]`}
                        onClick={() => {
                            setDropdownOpen2(!isDropdownOpen2);
                        }}
                    >
                        <div className="flex items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.5999 9.4638C10.9175 8.75014 9.08312 8.75014 7.40073 9.4638L7.39721 9.46531C7.08387 9.60066 6.7583 9.76213 6.43914 9.9788C5.53071 10.5844 4.58241 11.4673 3.85228 12.4015C3.48654 12.8695 3.16042 13.3696 2.9215 13.874C2.69316 14.3562 2.51021 14.9141 2.50312 15.4916L2.50262 15.5029C2.50141 15.5315 2.50033 15.5685 2.50006 15.6127C2.49954 15.7009 2.50224 15.8201 2.51419 15.9605C2.53774 16.2371 2.59926 16.6207 2.75833 17.0145C2.92078 17.4167 3.18187 17.8204 3.5853 18.117C3.98538 18.4111 4.4864 18.5714 5.09752 18.5714H14.8897C15.5009 18.5714 16.0022 18.411 16.4028 18.1178C16.8067 17.8223 17.0692 17.4202 17.2336 17.0194C17.3946 16.6267 17.4585 16.2439 17.4837 15.9673C17.4965 15.827 17.5 15.7079 17.5 15.6197C17.5 15.5754 17.4992 15.5384 17.4981 15.5099L17.4975 15.4948C17.4911 14.9175 17.3074 14.3591 17.079 13.8773C16.8402 13.3736 16.5142 12.8735 16.1486 12.4051C15.4181 11.4692 14.4687 10.5831 13.559 9.97714C13.2523 9.77314 12.923 9.60337 12.6034 9.46531L12.5999 9.4638ZM7.074 11.5304C7.30387 11.3742 7.554 11.2472 7.82973 11.128C9.23358 10.5331 10.767 10.5331 12.1709 11.128C12.4411 11.2449 12.702 11.3811 12.9317 11.5339C13.72 12.0589 14.5559 12.8396 15.1861 13.6471C15.5009 14.0503 15.7492 14.441 15.9146 14.7898C16.0862 15.1518 16.1341 15.3962 16.1341 15.5263V15.5646L16.136 15.5932C16.1362 15.5975 16.1364 15.6064 16.1364 15.6192C16.1364 15.6496 16.1351 15.6999 16.1294 15.7629C16.1175 15.8929 16.0886 16.0522 16.0274 16.2017C15.9694 16.343 15.88 16.483 15.7283 16.5941C15.5734 16.7075 15.3154 16.8182 14.8897 16.8182H5.09752C4.67171 16.8182 4.41517 16.7074 4.26217 16.595C4.11252 16.4849 4.02503 16.3464 3.96852 16.2065C3.90862 16.0582 3.8808 15.8996 3.86974 15.7697C3.86438 15.7068 3.86348 15.6566 3.86366 15.6262C3.86373 15.6133 3.864 15.6045 3.86416 15.6001L3.86655 15.568V15.5263C3.86655 15.3933 3.91493 15.1475 4.08618 14.7859C4.25143 14.437 4.49956 14.0469 4.81421 13.6442C5.44418 12.8381 6.28007 12.0593 7.06891 11.5339L7.074 11.5304Z" fill="#8395AC" />
                                <circle cx="9.99944" cy="4.643" r="2.46429" stroke="#8395AC" strokeWidth="1.5" />
                            </svg>
                            <span className="text-[#66798D] font-medium text-sm tracking-wide px-2">마이페이지</span>
                        </div>
                        {isDropdownOpen2 ? (
                            <FaChevronUp className="text-[#8395AC] w-3 h-3" />
                        ) : (
                            <FaChevronDown className="text-[#8395AC] w-3 h-3" />
                        )}
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen2 && (
                        <div className="hidden lg:block ml-10 bg-white rounded-md overflow-hidden transition-all duration-300 ease-in-out">
                            <ul className="flex flex-col space-y-1 py-2">
                                <li className={`px-4 py-2 ${activeItem === "health-status"
                                    ? activeClass
                                    : "hover:bg-[#EEF4FF]"
                                    } rounded-md cursor-pointer text-[#66798D] text-sm`} onClick={() => handleItemClick("health-status")}>개인정보 수정</li>
                            </ul>
                        </div>
                    )}
                </li>
                <div className="w-full flex flex-row flex-wrap sm:flex-col items-start gap-1 mt-[359px]">
                    {["사용설명서", "소프트웨어 명칭 및 버전", "의료기기 인증 정보"].map((item, idx) => (
                        <div key={idx} className="relative h-10 my-0 w-auto sm:w-full">
                            {/* Background Layer */}
                            <div className="absolute inset-0 bg-white rounded-lg" />

                            {/* Inner Highlight */}
                            <div className="absolute inset-y-0 left-[10%] right-[10%] bg-white rounded-[10px]" />

                            {/* Decorative Mask */}
                            <div className="absolute inset-0 bg-[#0054A6] opacity-0 rounded-lg" />

                            {/* Text Row */}
                            <div className="absolute left-10 right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
                                <span className="text-[#8395AC] font-normal text-[13px] leading-[21px]">
                                    {item}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </ul>
        </nav>
    );
};

export default Sidebar;
