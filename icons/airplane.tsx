'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

export function AirplaneIcon() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    controls.start('hover');
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start('initial');
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="-6 0 34 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={controls}
        variants={{
          initial: { x: 0, y: 0 },
          hover: {
            x: [0, 14, 12],
            y: [0, -14, -12],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              type: 'spring',
              stiffness: 200,
              damping: 10,
            },
          },
        }}
      >
        <motion.path
          d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        {/* Speed lines */}
        <motion.line
          x1="-6"
          y1="26"
          x2="0"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        <motion.line
          x1="-4"
          y1="28"
          x2="2"
          y2="22"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        <motion.line
          x1="-2"
          y1="30"
          x2="4"
          y2="24"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />
      </motion.svg>
    </div>
  );
}
