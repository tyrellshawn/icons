'use client';

import type { Transition, Variants } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

const Transition: Transition = {
  duration: 0.3,
  delay: 0.1,
  opacity: { delay: 0.15 },
};

const Variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
  },
};

const WorkflowIcon = () => {
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
          width="8"
          height="8"
          x="3"
          y="3"
          rx="2"
          transition={Transition}
          variants={Variants}
          animate={controls}
        />
        <motion.path
          d="M7 11v4a2 2 0 0 0 2 2h4"
          transition={Transition}
          variants={Variants}
          animate={controls}
        />
        <motion.rect
          width="8"
          height="8"
          x="13"
          y="13"
          rx="2"
          transition={Transition}
          variants={Variants}
          animate={controls}
        />
      </svg>
    </div>
  );
};

export { WorkflowIcon };
