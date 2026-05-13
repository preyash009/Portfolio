"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Cursor Dot */}
      <motion.div
        animate={{
          scale: isHovered ? 3 : 1,
          opacity: isHovered ? 0.4 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      
      {/* Glow Effect */}
      <motion.div
        animate={{
          scale: isHovered ? 3 : 1.5,
          opacity: isHovered ? 0.1 : 0.05,
        }}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="absolute top-0 left-0 w-20 h-20 bg-violet-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Cursor;
