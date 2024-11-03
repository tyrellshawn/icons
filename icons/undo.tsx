"use client";

import { animate, motion, useAnimation, Variants } from "framer-motion";

const pathVariants: Variants = {
  normal: {
    rotate: 0,
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    d: ["M4 7v6h6", "M3 7v6h6"],
    rotate: [15, 0],
    transition: { duration: 0.4 },
  },
};

const secondPathVariants: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
  },
};

const Undo = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path variants={pathVariants} d="M3 7v6h6" animate={controls} />
        <motion.path
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={secondPathVariants}
          animate={controls}
          d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
        />
      </svg>
    </div>
  );
};

export { Undo };
