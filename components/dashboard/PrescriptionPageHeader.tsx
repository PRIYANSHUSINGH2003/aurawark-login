import React from "react";

interface PageHeaderProps {
    onMenuClick: () => void;
}

const PrescriptionPageHeader: React.FC<PageHeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="fixed top-[72px] left-60 right-0 z-40 h-12 w-full bg-slate-50 px-8 text-sm font-medium text-slate-500 leading-6 max-md:left-0 flex items-center">
            {/* Breadcrumbs */}
            <div className="relative flex items-center gap-2">
                {/* Breadcrumb 1 */}
                <div className="flex items-center h-6 rounded text-[13px] text-[#97A8C4] font-normal">
                    <span className="hidden md:block px-3">처방 관리</span>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11408 4.13955C2.95211 4.31474 2.96405 4.58695 3.14075 4.74754L7.13195 8.37495L3.14075 12.0024C2.96405 12.163 2.95211 12.4352 3.11408 12.6104C3.27606 12.7856 3.55061 12.7974 3.72731 12.6368L7.71851 9.00938C8.09383 8.66828 8.09383 8.08163 7.71851 7.74052L3.72731 4.11311C3.55061 3.95252 3.27606 3.96435 3.11408 4.13955Z" fill="#97A8C4" stroke="#97A8C4" stroke-width="0.25" stroke-linecap="round" />
                    </svg>
                </div>

                {/* Breadcrumb 2 (Current Page) */}
                <div className="flex items-center h-6 px-1.5 rounded text-[13px] text-[#66798D] font-medium">
                    현재 페이지
                </div>
            </div>

            {/* Mobile button fallback */}
            <button
                onClick={onMenuClick}
                className="md:hidden ml-auto mr-4 text-sky-600 font-bold"
            >
                처방 관리
            </button>
        </header>
    );
};

export default PrescriptionPageHeader;
