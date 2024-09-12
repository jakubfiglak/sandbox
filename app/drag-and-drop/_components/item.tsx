"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ItemProps = {
  children: ReactNode;
};

export const Item = ({ children }: ItemProps) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", children as string);
      }}
      className="bg-slate-300 rounded-sm cursor-grab"
    >
      <Link
        draggable={false}
        href="/"
        onClick={(e) => console.log("clicked")}
        className="block p-10"
      >
        {children}
      </Link>
    </div>
  );
};
