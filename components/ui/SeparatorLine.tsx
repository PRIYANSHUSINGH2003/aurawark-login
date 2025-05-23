import React from "react";

const SeparatorLine = () => {
  return (
    <div>
      <svg
        width="1440"
        height="1"
        viewBox="0 0 1440 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="separator"
        style={{ position: "absolute", left: 0, top: 71, width: "100%", height: 1 }}
      >
        <path
          d="M0 0.455078L1440 0.455078"
          stroke="#DADFE9"
          strokeWidth="0.5"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default SeparatorLine;
