import React from "react";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  if (status === "처방대기") {
    return (
      <div className="flex items-center justify-center">
        <div className="relative flex items-center px-4 py-1 bg-green-200 bg-opacity-20 rounded-full">
          <span className="w-2 h-2 mr-2 bg-[#0CA147] rounded-full"></span>
          <span className="text-sm font-bold text-[#0CA147]">처방대기</span>
        </div>
      </div>
    );
  } else if (status === "처방전") {
    return (
      <div className="flex items-center justify-center">
        <div className="relative flex items-center px-4 py-1 bg-blue-100 bg-opacity-[0.16] rounded-full">
          <span className="w-2 h-2 mr-2 bg-[#007DEB] rounded-full"></span>
          <span className="text-sm font-bold text-[#007DEB]">처방전</span>
        </div>
      </div>
    );
  }

  // Default fallback
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center px-4 py-1 bg-gray-200 rounded-full">
        <span className="text-sm font-bold text-gray-600">{status}</span>
      </div>
    </div>
  );
};

export default StatusBadge;
