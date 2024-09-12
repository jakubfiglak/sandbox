"use client";

import type { ReactNode } from "react";

type ColumnProps = {
  children: ReactNode;
};

export const Column = ({ children }: ColumnProps) => {
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
      onDrop={(e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        console.log(data);
      }}
      className="bg-slate-500 rounded-md p-4 space-y-2"
    >
      {children}
    </div>
  );
};
