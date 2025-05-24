import React from "react";

const PrescriptionCardIcon: React.FC = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="card-icon"
    >
      <g clipPath="url(#clip0_5231_57783)">
        <path
          opacity="0.21"
          d="M37 0C49.7025 0 60 10.2975 60 23V37C60 49.7025 49.7025 60 37 60H23C10.2975 60 0 49.7025 0 37V23C0 10.2975 10.2975 0 23 0H37Z"
          fill="#8280FF"
        />
        <path
          opacity="0.8"
          d="M24.7109 22.0586H35.2992"
          stroke="#8280FF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.6"
          d="M24.7109 26.4707H35.2992"
          stroke="#8280FF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M24.7109 30.8828H30.0051"
          stroke="#8280FF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.7656 37.0586H37.0597"
          stroke="#8280FF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <mask id="path-6-inside-1_5231_57783" fill="white">
          <rect x="17.6484" y="15" width="24.7059" height="30" rx="2" />
        </mask>
        <rect
          x="17.6484"
          y="15"
          width="24.7059"
          height="30"
          rx="2"
          stroke="#8280FF"
          strokeWidth="5.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          mask="url(#path-6-inside-1_5231_57783)"
        />
        <path
          d="M34.4141 34.4121V39.7062"
          stroke="#8280FF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5231_57783">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PrescriptionCardIcon;
