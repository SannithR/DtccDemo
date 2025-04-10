import React from "react";

export const ArrowDown = ({ className }) => {
  return (
    <svg
      className={`arrow-down ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.00001 3.33331V12.6666M8.00001 12.6666L12.6667 7.99998M8.00001 12.6666L3.33334 7.99998"
        stroke="#475467"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </svg>
  );
};
