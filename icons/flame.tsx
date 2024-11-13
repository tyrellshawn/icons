'use client'

import { motion, useAnimation } from 'framer-motion'

const FlameIcon = () => {
    const controls = useAnimation()

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
                <motion.path
                    d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                    initial="normal"
                    animate={controls}
                    variants={{
                        normal: {
                            scale: 1,
                            translateY: 0,
                        },
                        animate: {
                            scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                            translateY: [0, -2, 1, -1.5, 0.5, 0],
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            },
                        },
                    }}
                />
            </svg>
        </div>
    )
}

export { FlameIcon }