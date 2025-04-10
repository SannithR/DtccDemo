import React from "react";

export const SearchLg = ({ className }) => {
  return (
    <svg
      className={`search-lg ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 15 15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_0_24)">
        <path
          className="path"
          d="M13.125 13.125L10.9376 10.9375M12.5 7.1875C12.5 10.1215 10.1215 12.5 7.1875 12.5C4.25349 12.5 1.875 10.1215 1.875 7.1875C1.875 4.25349 4.25349 1.875 7.1875 1.875C10.1215 1.875 12.5 4.25349 12.5 7.1875Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_0_24">
          <rect className="rect" fill="white" height="15" width="15" />
        </clipPath>
      </defs>
    </svg>
  );
};
