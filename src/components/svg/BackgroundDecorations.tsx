"use client";

import { motion } from "framer-motion";

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <motion.svg className="absolute top-20 left-10 w-16 h-16 text-purple-500/20" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" fill="currentColor" />
      </motion.svg>

      <motion.svg className="absolute top-1/3 right-20 w-12 h-12 text-blue-500/20" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
      </motion.svg>

      <motion.svg className="absolute bottom-1/4 left-1/4 w-20 h-20 text-cyan-500/20" animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" fill="currentColor" transform="rotate(45 50 50)" />
      </motion.svg>

      <motion.svg className="absolute top-2/3 right-1/3 w-14 h-14 text-pink-500/20" animate={{ y: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} viewBox="0 0 100 100">
        <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="currentColor" />
      </motion.svg>
    </div>
  );
};

export const GridPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-white/20" />
      </svg>
    </div>
  );
};

export const CodePattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-10 left-10 text-xs font-mono text-purple-400">{"while (learning) { grow(); }"}</div>
      <div className="absolute top-20 right-20 text-xs font-mono text-blue-400">{"if (failed) { tryAgain(); }"}</div>
      <div className="absolute bottom-15 left-16 text-xs font-mono text-cyan-400">{'const passion = "unlimited";'}</div>
      <div className="absolute bottom-20 right-32 text-xs font-mono text-pink-400">{"while (alive) { keepCoding(); }"}</div>
      <div className="absolute top-1/4 left-1/6 text-xs font-mono text-green-400">{"// Code is poetry in motion"}</div>
      <div className="absolute top-1/3 left-1/2 text-xs font-mono text-yellow-400">{"success = hardWork + persistence;"}</div>
    </div>
  );
};

export const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};
