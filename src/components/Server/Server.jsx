import React from "react";

export const Server = ({ className }) => {
  return (
    <svg
      className={`server ${className}`}
      fill="none"
      height="60"
      viewBox="0 0 60 60"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#D9F9E7" height="60" rx="12" width="60" />

      <path
        className="path"
        d="M24 24H24.01M24 36H24.01M23.2 28H36.8C37.9201 28 38.4802 28 38.908 27.782C39.2843 27.5903 39.5903 27.2843 39.782 26.908C40 26.4802 40 25.9201 40 24.8V23.2C40 22.0799 40 21.5198 39.782 21.092C39.5903 20.7157 39.2843 20.4097 38.908 20.218C38.4802 20 37.9201 20 36.8 20H23.2C22.0799 20 21.5198 20 21.092 20.218C20.7157 20.4097 20.4097 20.7157 20.218 21.092C20 21.5198 20 22.0799 20 23.2V24.8C20 25.9201 20 26.4802 20.218 26.908C20.4097 27.2843 20.7157 27.5903 21.092 27.782C21.5198 28 22.0799 28 23.2 28ZM23.2 40H36.8C37.9201 40 38.4802 40 38.908 39.782C39.2843 39.5903 39.5903 39.2843 39.782 38.908C40 38.4802 40 37.9201 40 36.8V35.2C40 34.0799 40 33.5198 39.782 33.092C39.5903 32.7157 39.2843 32.4097 38.908 32.218C38.4802 32 37.9201 32 36.8 32H23.2C22.0799 32 21.5198 32 21.092 32.218C20.7157 32.4097 20.4097 32.7157 20.218 33.092C20 33.5198 20 34.0799 20 35.2V36.8C20 37.9201 20 38.4802 20.218 38.908C20.4097 39.2843 20.7157 39.5903 21.092 39.782C21.5198 40 22.0799 40 23.2 40Z"
        stroke="#43946D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
