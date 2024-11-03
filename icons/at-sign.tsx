"use client";

import { motion, useAnimation, Variants } from "framer-motion";

const pathVariants: Variants = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0, rotate: 0 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
    rotate: [20, 0],
  },
};

const AtSign = () => {
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
        <motion.circle
          variants={{
            normal: { opacity: 1 },
            animate: {
              opacity: [0, 1],
            },
          }}
          animate={controls}
          transition={{ duration: 0.8 }}
          cx="12"
          cy="12"
          r="4"
        />
        <motion.path
          variants={pathVariants}
          transition={{ duration: 0.6 }}
          animate={controls}
          d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
        />
      </svg>
    </div>
  );
};

export { AtSign };
