"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { FloatingShapes, ParticleBackground } from "./svg/BackgroundDecorations";
import { CodeBrackets, GlowingOrb, FloatingIcon } from "./svg/AnimatedIcons";
import { LeetCodeIcon } from "./svg/LeetCodeIcon";

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-16">
      <ParticleBackground />
      <FloatingShapes />

      {/* Enhanced gradient orbs */}
      <div className="absolute top-1/4 left-1/4 hidden lg:block">
        <GlowingOrb className="w-48 lg:w-72 h-48 lg:h-72" color="purple" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 hidden lg:block">
        <GlowingOrb className="w-48 lg:w-72 h-48 lg:h-72" color="blue" />
      </div>
      <div className="absolute top-1/2 right-4 lg:right-10 hidden md:block">
        <FloatingIcon delay={1}>
          <CodeBrackets className="w-8 lg:w-12 h-8 lg:h-12 text-cyan-500/30" />
        </FloatingIcon>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, type: "spring" }} className="mb-8"></motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
              Hi There! <span className="inline-block animate-wave">👋🏻</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              I'm <span className="text-gradient">Preyash Parikh</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="mb-8">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 h-12 sm:h-14 md:h-16 flex items-center justify-center px-4">
              <TypeAnimation sequence={["Sr. Software Developer", 2000, "Full-stack Developer", 2000, "Freelancer", 2000]} wrapper="span" speed={20} repeat={Infinity} className="text-gradient text-center" />
            </div>
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            I am a passionate Senior Software Engineer with 7+ years of experience in crafting 
            exceptional digital experiences using modern technologies like PHP, Laravel, Vue.js, 
            React.js, Next.js, and TypeScript.
          </motion.p> */}

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 px-4">
            <a href="/docs/Preyash_SDE.pdf" className="glass-morphism px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group w-full sm:w-auto" download>
              <Download className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              Resume
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 1 }} className="flex justify-center gap-4 sm:gap-6 mb-8">
            <a href="https://www.linkedin.com/in/preyash9897/" className="text-gray-400 hover:text-blue-400 transition-colors p-3 glass-morphism rounded-full hover:scale-110 transform duration-300" target="_blank">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/preyash009" className="text-gray-400 hover:text-purple-400 transition-colors p-3 glass-morphism rounded-full hover:scale-110 transform duration-300" target="_blank">
              <Github className="w-6 h-6" />
            </a>
            {/* <a href="https://leetcode.com/u/parikhpreyash9897/" className="text-gray-400 hover:text-orange-400 transition-colors p-3 glass-morphism rounded-full hover:scale-110 transform duration-300" target="_blank">
              <LeetCodeIcon className="w-6 h-6" />
            </a> */}
            <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors p-3 glass-morphism rounded-full hover:scale-110 transform duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 1.2 }} className="flex justify-center">
            <a href="#about" className="cursor-pointer">
              <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce hover:text-purple-400 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
