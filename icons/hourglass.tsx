'use client'

import { motion, useAnimation } from 'framer-motion'

export function HourglassIcon() {
    const controls = useAnimation()

    const handleHover = () => {
        controls.start('hover')
    }

    const handleHoverEnd = () => {
        controls.start('initial')
    }

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
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={controls}
                variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }
                }}
            >
                <motion.path
                    d="M5 22h14"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M5 2h14"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.path
                    d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                    d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </motion.svg>
        </div>
    )
}