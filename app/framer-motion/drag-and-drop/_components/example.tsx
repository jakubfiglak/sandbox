"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const Example = () => {
  const constraintsRef = useRef(null);
  const isDragging = useRef(false);

  return (
    <>
      <motion.div
        ref={constraintsRef}
        className="absolute w-[300px] h-[300px] bg-purple-600 rounded-3xl top-[calc(50%-150px)] left-[calc(50%-150px)]"
      />
      <motion.div
        drag
        onDragStart={() => {
          isDragging.current = true;
        }}
        onDragEnd={() => {
          setTimeout(() => {
            isDragging.current = false;
          }, 150);
        }}
        dragConstraints={constraintsRef}
        className="bg-purple-900 rounded-2xl w-[150px] h-[150px] absolute top-[calc(50%-75px)] left-[calc(50%-75px)] cursor-grab"
      >
        <Link
          href="/"
          draggable={false}
          onClick={(e) => {
            if (isDragging.current) {
              e.preventDefault();
            }
          }}
          className="flex items-center justify-center w-full h-full text-white"
        >
          Home
        </Link>
      </motion.div>
    </>
  );
};
