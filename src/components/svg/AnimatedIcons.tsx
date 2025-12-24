'use client'

import { motion } from 'framer-motion'

export const AnimatedArrow = ({ className = "w-6 h-6", direction = "right" }: { 
  className?: string
  direction?: "up" | "down" | "left" | "right"
}) => {
  const rotations = {
    up: -90,
    down: 90,
    left: 180,
    right: 0
  }

  return (
    <motion.svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ rotate: rotations[direction] }}
      whileHover={{ x: direction === "right" ? 5 : direction === "left" ? -5 : 0, y: direction === "down" ? 5 : direction === "up" ? -5 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </motion.svg>
  )
}

export const PulseDot = ({ className = "w-4 h-4" }: { className?: string }) => (
  <motion.div
    className={`${className} rounded-full bg-gradient-to-r from-purple-500 to-blue-500`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

export const LoadingSpinner = ({ className = "w-8 h-8" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      strokeDasharray="32"
      strokeDashoffset="32"
      strokeLinecap="round"
      className="opacity-25"
    />
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      strokeDasharray="32"
      strokeDashoffset="24"
      strokeLinecap="round"
      className="text-purple-500"
    />
  </motion.svg>
)

export const HeartBeat = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </motion.svg>
)

export const CodeBrackets = ({ className = "w-8 h-8" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <motion.path
      d="M16 18l6-6-6-6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M8 6l-6 6 6 6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
    />
  </motion.svg>
)

export const GlowingOrb = ({ className = "w-16 h-16", color = "purple" }: { 
  className?: string
  color?: "purple" | "blue" | "cyan" | "pink" | "green"
}) => {
  const colors = {
    purple: "from-purple-500/20 to-purple-600/40",
    blue: "from-blue-500/20 to-blue-600/40",
    cyan: "from-cyan-500/20 to-cyan-600/40",
    pink: "from-pink-500/20 to-pink-600/40",
    green: "from-green-500/20 to-green-600/40"
  }

  return (
    <motion.div
      className={`${className} rounded-full bg-gradient-to-br ${colors[color]} blur-sm`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

export const FloatingIcon = ({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
}) => (
  <motion.div
    className={className}
    animate={{
      y: [-10, 10, -10],
      rotate: [-5, 5, -5]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  >
    {children}
  </motion.div>
)