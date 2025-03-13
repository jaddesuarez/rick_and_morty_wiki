import React from "react";

interface BannerProps {
  title: string;
  className?: string;
}

export const Banner = ({ title, className = "" }: BannerProps) => {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 p-0">
      <div className={`w-full bg-white p-10 ${className}`}>
        <h1 className="m-0 font-bold">{title}</h1>
      </div>
    </div>
  );
};
