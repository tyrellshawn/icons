'use client';

import { motion, useAnimation } from 'framer-motion';

const TrendingDownIcon = () => {
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
        <motion.polyline
          points="22 17 13.5 8.5 8.5 13.5 2 7"
          variants={{
            normal: {
              opacity: 1,
              pathLength: 1,
              transition: {
                duration: 0.4,
                opacity: { duration: 0.1 },
              },
            },
            animate: {
              opacity: [0, 1],
              pathLength: [0, 1],
              pathOffset: [1, 0],
              transition: {
                duration: 0.4,
                opacity: { duration: 0.1 },
              },
            },
          }}
          animate={controls}
        />
        <motion.polyline
          points="16 17 22 17 22 11"
          variants={{
            normal: {
              opacity: 1,
              pathLength: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
                opacity: { duration: 0.1, delay: 0.3 },
              },
            },
            animate: {
              opacity: [0, 1],
              pathLength: [0, 1],
              pathOffset: [0.5, 0],
              transition: {
                delay: 0.3,
                duration: 0.3,
                opacity: { duration: 0.1, delay: 0.3 },
              },
            },
          }}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { TrendingDownIcon };
