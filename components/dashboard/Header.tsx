"use client";
import React, { useState, useRef, useEffect } from "react";
import NotificationIcon from "./icons/NotificationIcon";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="box-border flex fixed top-0 left-0 justify-between items-center px-7 py-0 m-0 w-full bg-white border-b border-zinc-200 h-[72px] z-[100] max-sm:px-4">
      <h1 className="text-2xl font-bold text-sky-700">AIOrtho</h1>
      
      <div className="flex items-center gap-5">
        <button className="w-10 h-10 flex justify-center items-center" aria-label="Notifications">
          <NotificationIcon />
        </button>

        {/* MY Dropdown Trigger */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-10 h-10 text-lg font-semibold text-gray-600 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            MY
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[244px] bg-white rounded-xl shadow-[0_0_32px_rgba(159,171,196,0.3)] z-50">
              {/* Top Box */}
              <div className="flex flex-col px-4 py-4 gap-2">
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] font-bold text-[#343A47]">박의사 님</p>
                  <p className="text-[13px] font-medium text-[#66798D]">의사 코드 (UH2406001)</p>
                </div>
              </div>
              
              {/* Divider */}
              <div className="border-t border-[#F0F3FA] w-full" />

              {/* Logout */}
              <div className="flex items-center px-4 py-4 hover:bg-gray-100 rounded-b-xl cursor-pointer">
                <p className="text-[14px] font-medium text-[#343A47]">로그아웃</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
