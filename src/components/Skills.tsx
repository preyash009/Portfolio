"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Globe, Server } from "lucide-react";
import { FloatingIcon, GlowingOrb } from "./svg/AnimatedIcons";
import { BinaryCodeAnimation, BinaryCodeIcon } from "./svg/BinaryCode";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [ "React.js", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript" ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [ "PHP", "Laravel", "Node.js", "Express.js", "REST APIs" ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [ "MySQL", "PostgreSQL", "MongoDB" ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Tools & Technologies",
    icon: Code2,
    skills: [ "Git", "Linux", "Webpack", "AI Tools", "Docker", "AWS EC2" ],
    color: "from-orange-500 to-red-500",
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="skills" className="py-20 relative overflow-hidden pt-20" ref={ref}>
      {/* <BinaryCodeAnimation /> */}

      <div className="absolute top-20 right-10">
        <GlowingOrb className="w-32 h-32" color="cyan" />
      </div>
      <div className="absolute bottom-20 left-10">
        <FloatingIcon delay={2}>
          <BinaryCodeIcon className="w-16 h-16 text-green-400/20" />
        </FloatingIcon>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Skillset</span>
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="glass-morphism p-6 rounded-2xl group hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-center text-white">{category.title}</h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => {
                  return (
                    <motion.div key={skill} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: index * 0.1 + skillIndex * 0.05 }} className="bg-gray-800/50 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-700 hover:border-purple-500 transition-all duration-300 flex items-center gap-1 sm:gap-2 group">
                      <span>{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
