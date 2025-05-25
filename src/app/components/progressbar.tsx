'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, ReactNode } from 'react'

interface ProgressTooltipProps {
    progress: number
    label: string
    children: ReactNode
}

/**
 * A tooltip component that displays a label and a progress bar with a level indication.
 * The progress bar is filled based on the progress prop.
 * The level is determined by the progress value and is indicated by a colored dot.
 * The component is designed to be used as a child of another component.
 * 
 * @example
 * <ProgressTooltip progress={20} label="Example">
 *   <div>Example content</div>
 * </ProgressTooltip>
 * 
 * @param {number} progress - The progress value in percent.
 * @param {string} label - The label to display.
 * @param {ReactNode} children - The content to display inside the component.
 * @returns {JSX.Element}
 */
const ProgressTooltip = ({ progress, label, children }: ProgressTooltipProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const totalSegments = 10
    const filledSegments = Math.round((progress / 100) * totalSegments)

    /**
     * Returns the level based on the progress value.
     * The level is determined by the progress value.
     * The levels are: low (0-33), medium (33-66), high (66-100).
     */
    const getLevel = () => {
        if (progress < 33) return 'low'
        if (progress < 66) return 'medium'
        return 'high'
    }

    /**
     * Returns the color based on the level.
     * The colors are: low (red), medium (yellow), high (green).
     */
    const getColor = () => {
        switch (getLevel()) {
            case 'low': return '#ef4444'
            case 'medium': return '#f59e0b'
            case 'high': return '#22c55e'
            default: return '#3b82f6'
        }
    }

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(true)}
        >
            <div className="cursor-pointer">
                {children}
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute bottom-full center -left-[150%] transform -translate-x-1/2 -translate-y-4 bg-white p-4 rounded-lg shadow-xl border border-gray-100 z-50"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-col items-center mb-3">
                            <h3 className="font-semibold text-gray-800 mb-1">{label}</h3>
                            <span
                                className="text-sm font-medium px-2 py-1 rounded-full"
                                style={{ backgroundColor: `${getColor()}20`, color: getColor() }}
                            >
                                {getLevel().charAt(0).toUpperCase() + getLevel().slice(1)} level
                            </span>
                        </div>

                        <div className="flex gap-1.5">
                            {[...Array(totalSegments)].map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="w-4 h-4 rounded-sm"
                                    initial={{ backgroundColor: '#f3f4f6', scale: 1 }}
                                    animate={{
                                        backgroundColor: index < filledSegments ? getColor() : '#f3f4f6',
                                        scale: index < filledSegments ? 1.1 : 1
                                    }}
                                    transition={{
                                        delay: index * 0.05,
                                        duration: 0.2,
                                        type: 'tween'
                                    }}
                                />
                            ))}
                        </div>
                        <div
                            className="absolute md:hidden top-2 right-2 cursor-pointer"
                        >
                            <button
                                onClick={() => setIsHovered(false)}
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ProgressTooltip
