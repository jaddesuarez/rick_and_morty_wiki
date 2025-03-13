import React from "react";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="min-h-[100px]"></div>
      {children}
    </div>
  );
};
