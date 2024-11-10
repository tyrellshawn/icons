'use client'

import { motion, useAnimation } from 'framer-motion'

const WifiIcon = () => {
    const controls = useAnimation()

    const wifiLevels = [
        { d: "M12 20h.01", initialScale: 1, delay: 0 },
        { d: "M8.5 16.429a5 5 0 0 1 7 0", initialScale: 0, delay: 0.1 },
        { d: "M5 12.859a10 10 0 0 1 14 0", initialScale: 0, delay: 0.2 },
        { d: "M2 8.82a15 15 0 0 1 20 0", initialScale: 0, delay: 0.3 },
    ]

    const handleHover = async () => {
        await controls.start('animate')
        await new Promise(resolve => setTimeout(resolve, 500)) // Hold the final state
        controls.start('normal')
    }

    return (
        <div
            className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
            onMouseEnter={handleHover}
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
                {wifiLevels.map((level, index) => (
                    <motion.path
                        key={index}
                        d={level.d}
                        initial={{ scale: level.initialScale, opacity: level.initialScale }}
                        variants={{
                            normal: {
                                scale: level.initialScale,
                                opacity: level.initialScale,
                                transformOrigin: '50% 50%'
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                transformOrigin: '50% 50%'
                            },
                        }}
                        animate={controls}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                            delay: level.delay,
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export { WifiIcon }