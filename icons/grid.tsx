'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hover: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const circleVariants = {
  initial: { opacity: 1 },
  hover: {
    opacity: [1, 0.3, 1],
    transition: {
      duration: 0.4,
    },
  },
};

const circles = [
  { cx: 19, cy: 5 }, // Top right
  { cx: 12, cy: 5 }, // Top middle
  { cx: 19, cy: 12 }, // Middle right
  { cx: 5, cy: 5 }, // Top left
  { cx: 12, cy: 12 }, // Center
  { cx: 19, cy: 19 }, // Bottom right
  { cx: 5, cy: 12 }, // Middle left
  { cx: 12, cy: 19 }, // Bottom middle
  { cx: 5, cy: 19 }, // Bottom left
];

const GridIcon = () => {
  return (
    <motion.div
      className="cursor-pointer p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      whileHover="hover"
      whileTap="hover"
      initial="initial"
      variants={containerVariants}
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
        {circles.map((circle) => (
          <motion.circle
            key={`${circle.cx}-${circle.cy}`}
            cx={circle.cx}
            cy={circle.cy}
            r="1"
            variants={circleVariants}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export { GridIcon };
