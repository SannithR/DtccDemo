import React from "react";

export const Divider = ({ className }) => {
  return (
    <svg
      className={`divider ${className}`}
      fill="none"
      height="1"
      viewBox="0 0 695 1"
      width="695"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M695 1H0V0H695V1Z"
        fill="#EAECF0"
        fillRule="evenodd"
      />
    </svg>
  );
};
