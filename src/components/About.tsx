"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { CodePattern } from './svg/BackgroundDecorations'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="about" className="py-20 pt-20 relative bg-black/50" ref={ref}>
      <CodePattern />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            LET ME <span className="text-gradient">INTRODUCE</span> MYSELF
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div> */}
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-morphism p-8 rounded-2xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I’m a <span className="text-gradient font-semibold">Sr. Software Engineer</span> who enjoys turning ideas into reliable, scalable products. I focus on clean architecture, problem-solving, and building systems that deliver smooth user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I work across the full stack, building robust backend systems with <span className="text-gradient font-semibold">PHP</span> and <span className="text-gradient font-semibold">Laravel</span>, and modern interfaces using <span className="text-gradient font-semibold">Vue.js, React.js, and Next.js</span>. I’m always learning new technologies and improving my craft to build better software.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image 
                src="/images/avatar.svg" 
                alt="Developer Avatar" 
                width={280} 
                height={280} 
                className="w-full max-w-sm h-80 hover:scale-105 transition-transform duration-300" 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
