'use client';

import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

const baseRectVariants: Variants = {
  normal: {
    x: 0,
    y: 0,
  },
};

const baseRectTransition = {
  transition: {
    times: [0, 0.2, 0.5, 1],
    duration: 0.5,
    stiffness: 260,
    damping: 20,
  },
};

const leftRectVariants: Variants = {
  ...baseRectVariants,
  animate: {
    y: [0, 2, 0, 0],
    ...baseRectTransition,
  },
};

const rightRectVariants: Variants = {
  ...baseRectVariants,
  animate: {
    y: [0, 0, 2, 0],
    ...baseRectTransition,
  },
};

const PauseIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
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
        <motion.rect
          x="4.5"
          y="2.5"
          width="5"
          height="19"
          rx="0.5"
          variants={leftRectVariants}
          animate={controls}
        />
        <motion.rect
          x="14.5"
          y="2.5"
          width="5"
          height="19"
          rx="0.5"
          variants={rightRectVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { PauseIcon };
