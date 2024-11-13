'use client'

import { motion, useAnimation } from 'framer-motion'

const FireExtinguisherIcon = () => {
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
                <path
                    d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"
                />
                <path
                    d="M9 18h8"
                />
                <path d="M18 3h-3" />
                <path d="M11 3a6 6 0 0 0-6 6v11" />
                <path
                    d="M5 13h4"
                />
                <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
                {/* Pin */}
                <motion.path
                    d="M11 7h4"
                    animate={controls}
                    variants={{
                        normal: { y: 0, rotate: 0 },
                        animate: { y: 15, rotate: 45, transition: { duration: 0.3 } },
                    }}
                />
                {/* Spray lines */}
                <motion.path
                    d="M15.5 4.5 L20 2"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={{
                        normal: { opacity: 0, pathLength: 0 },
                        animate: { opacity: 1, pathLength: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.path
                    d="M15.5 4.5 L20 4.5"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={{
                        normal: { opacity: 0, pathLength: 0 },
                        animate: { opacity: 1, pathLength: 1 },
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                />
                <motion.path
                    d="M15.5 4.5 L20 7"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={{
                        normal: { opacity: 0, pathLength: 0 },
                        animate: { opacity: 1, pathLength: 1 },
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                />
            </svg>
        </div>
    )
}

export { FireExtinguisherIcon }