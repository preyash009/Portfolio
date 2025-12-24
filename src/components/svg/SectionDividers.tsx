"use client";

import { motion } from "framer-motion";

export const WaveDivider = ({ className = "w-full h-20", flip = false, color = "purple" }: { className?: string; flip?: boolean; color?: "purple" | "blue" | "cyan" | "pink" }) => {
  const colors = {
    purple: "rgba(139, 92, 246, 0.1)",
    blue: "rgba(59, 130, 246, 0.1)",
    cyan: "rgba(6, 182, 212, 0.1)",
    pink: "rgba(236, 72, 153, 0.1)",
  };

  return (
    <div className={`${className} overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg className="relative block w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <motion.path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill={colors[color]} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
      </svg>
    </div>
  );
};

export const GeometricDivider = ({ className = "w-full h-16" }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center overflow-hidden`}>
    <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
        </linearGradient>
      </defs>
      <motion.polygon points="0,100 600,20 1200,100 1200,0 0,0" fill="url(#geometricGradient)" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
    </svg>
  </div>
);

export const DotPattern = ({ className = "w-full h-8" }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <div className="flex space-x-2">
      {[...Array(5)].map((_, i) => (
        <motion.div key={i} className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1, duration: 0.5 }} />
      ))}
    </div>
  </div>
);

export const CircuitPattern = ({ className = "w-full h-24" }: { className?: string }) => (
  <div className={`${className} overflow-hidden opacity-20`}>
    <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <motion.g initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }}>
        <path d="M0 50 L50 50 L50 30 L100 30 L100 70 L150 70 L150 50 L200 50 L200 20 L250 20 L250 80 L300 80 L300 50 L350 50 L350 30 L400 30" stroke="url(#circuitGradient)" strokeWidth="2" fill="none" />
        <circle cx="50" cy="50" r="3" fill="#8b5cf6" />
        <circle cx="150" cy="70" r="3" fill="#3b82f6" />
        <circle cx="250" cy="20" r="3" fill="#06b6d4" />
        <circle cx="350" cy="30" r="3" fill="#8b5cf6" />
      </motion.g>
    </svg>
  </div>
);
