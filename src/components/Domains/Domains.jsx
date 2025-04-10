import React from "react";

export const Domains = ({ className }) => {
  return (
    <svg
      className={`domains ${className}`}
      fill="none"
      height="60"
      viewBox="0 0 60 60"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#DEEAFC" height="60" rx="12" width="60" />

      <g className="g" clipPath="url(#clip0_16_94)">
        <path
          className="path"
          d="M29.302 39.5976C29.5234 39.7267 29.6341 39.7913 29.7903 39.8248C29.9116 39.8508 30.0884 39.8508 30.2097 39.8248C30.3659 39.7913 30.4766 39.7267 30.698 39.5976C32.646 38.4611 38 34.8911 38 29.9827V25.2003C38 24.4008 38 24.001 37.8692 23.6574C37.7537 23.3538 37.566 23.083 37.3223 22.8682C37.0465 22.6251 36.6722 22.4848 35.9236 22.204L30.5618 20.1934C30.3539 20.1154 30.25 20.0764 30.143 20.061C30.0482 20.0473 29.9518 20.0473 29.857 20.061C29.75 20.0764 29.6461 20.1154 29.4382 20.1934L24.0764 22.204C23.3278 22.4848 22.9535 22.6251 22.6777 22.8682C22.434 23.083 22.2463 23.3538 22.1308 23.6574C22 24.001 22 24.4008 22 25.2003V29.9827C22 34.8911 27.354 38.4611 29.302 39.5976Z"
          stroke="#6086E9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_16_94">
          <rect
            className="rect"
            fill="white"
            height="24"
            transform="translate(18 18)"
            width="24"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
