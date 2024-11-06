'use client';

import { motion, useAnimation } from 'framer-motion';

const DURATION = 0.3;

const calculateDelay = (i: number) => {
  return i === 0 ? 0.1 : i * DURATION + 0.1;
};

const StethoscopeIcon = () => {
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
      >
        <motion.circle
          cx="18.5"
          cy="10.5"
          r="2"
          stroke="#222222"
          transition={{
            duration: DURATION,
            delay: calculateDelay(0),
            opacity: { delay: calculateDelay(0) },
          }}
          variants={{
            normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
          animate={controls}
        />
        <motion.circle cx="18.5" cy="10.5" r="0.5" fill="#222222" />
        <motion.circle cx="8.5" cy="13.5" r="1.5" fill="#222222" />

        <motion.path
          d="M8.5 13.5C12.0935 13.5 13.2658 8.65754 13.4669 5.49813C13.502 4.94696 13.0523 4.5 12.5 4.5H11.5"
          stroke="#222222"
          strokeLinecap="round"
          transition={{
            duration: DURATION,
            delay: calculateDelay(1),
            opacity: { delay: calculateDelay(1) },
          }}
          variants={{
            normal: {
              pathLength: 1,
              pathOffset: 0,
              opacity: 1,
              transition: { delay: 0 },
            },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [1, 0],
            },
          }}
          animate={controls}
        />
        <motion.path
          d="M8.5 13.5C4.9065 13.5 3.73423 8.65754 3.53308 5.49813C3.49799 4.94696 3.94772 4.5 4.5 4.5H5.5"
          stroke="#222222"
          strokeLinecap="round"
          transition={{
            duration: DURATION,
            delay: calculateDelay(1),
            opacity: { delay: calculateDelay(1) },
          }}
        />
        <motion.path
          d="M18.5 12.5V14.5C18.5 17.2614 16.2614 19.5 13.5 19.5C10.7386 19.5 8.5 17.2614 8.5 14.5V13.5"
          stroke="#222222"
          strokeLinecap="round"
          transition={{
            duration: DURATION,
            delay: calculateDelay(2),
            opacity: { delay: calculateDelay(2) },
          }}
          variants={{
            normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
            },
          }}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { StethoscopeIcon };
