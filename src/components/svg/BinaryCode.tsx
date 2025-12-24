'use client'

import { motion } from 'framer-motion'

export const BinaryCodeAnimation = () => {
  const binaryString = "01001000 01100101 01101100 01101100 01101111"
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <motion.div
        className="absolute top-10 left-0 text-2xl font-mono text-green-400"
        initial={{ x: -200 }}
        animate={{ x: '100vw' }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {binaryString}
      </motion.div>
      <motion.div
        className="absolute top-32 right-0 text-xl font-mono text-blue-400"
        initial={{ x: 200 }}
        animate={{ x: '-100vw' }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
      >
        10110010 11000001 01110100 01100001
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-0 text-lg font-mono text-green-400"
        initial={{ x: -150 }}
        animate={{ x: '100vw' }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 10 }}
      >
        01000011 01101111 01100100 01100101
      </motion.div>
    </div>
  )
}

export const BinaryCodeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="4" width="2" height="2" />
    <rect x="6" y="4" width="2" height="2" />
    <rect x="10" y="4" width="2" height="2" />
    <rect x="14" y="4" width="2" height="2" />
    <rect x="18" y="4" width="2" height="2" />
    
    <rect x="2" y="8" width="2" height="2" />
    <rect x="10" y="8" width="2" height="2" />
    <rect x="18" y="8" width="2" height="2" />
    
    <rect x="6" y="12" width="2" height="2" />
    <rect x="10" y="12" width="2" height="2" />
    <rect x="14" y="12" width="2" height="2" />
    <rect x="18" y="12" width="2" height="2" />
    
    <rect x="2" y="16" width="2" height="2" />
    <rect x="6" y="16" width="2" height="2" />
    <rect x="14" y="16" width="2" height="2" />
    
    <rect x="2" y="20" width="2" height="2" />
    <rect x="10" y="20" width="2" height="2" />
    <rect x="14" y="20" width="2" height="2" />
    <rect x="18" y="20" width="2" height="2" />
  </svg>
)