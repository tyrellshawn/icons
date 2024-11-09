'use client';

import type { Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
  animate: {
    x: [0, -1, 2, 0],
    rotate: [0, -10, 0, 0],
    opacity: 0.5,
    transition: {
      duration: 0.5,
      times: [0, 0.2, 0.5, 1],
      stiffness: 260,
      damping: 20,
    },
  },
};

const PlayIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <motion.svg
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
        <motion.path
          variants={pathVariants}
          animate={controls}
          d="M20.5347 11.1381C21.192 11.5247 21.192 12.4753 20.5347 12.8619L6.50702 21.1135C5.84039 21.5057 5 21.025 5 20.2516L5 3.74842C5 2.975 5.84039 2.49434 6.50702 2.88648L20.5347 11.1381Z"
        />
      </motion.svg>
    </div>
  );
};

export { PlayIcon };
