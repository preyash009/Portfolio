"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "Playbook365",
    description: "Playbook365 is the top all-in-one tournament management & event housing software with tools to manage tournaments, event housing, sports facilities, and clubs.",
    tech: ["Laravel", "Vue.js", "MySQL", "REST API"],
    github: "",
    live: "https://www.playbook365.com/",
    image: "/images/projects/playbook365.webp",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    title: "Payrup",
    description: "Pay bills for airtel recharge, jio recharge, idea recharge, tata sky, dth, dish tv, broadband, gas, water bill. Quick bill payment & assured cashback.",
    tech: ["React.js", "Next.js", "TypeScript"],
    github: "",
    live: "https://payrup.com/",
    image: "/images/projects/payrup.webp",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    title: "Armed forces reunions",
    description: "Armed Forces Reunions is the original military reunion planner and specializes in every aspect of planning a successful reunion. Call today!",
    tech: ["Laravel", "Vue.js", "MySQL", "REST API"],
    github: "",
    live: "https://www.armedforcesreunions.com/",
    image: "/images/projects/afri.webp",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    title: "TicketGo",
    description: "TicketGo the top-rated SaaS ticket system by Workdo.io. The Most efficient help desk and supporting system for your customers.",
    tech: ["Laravel", "MySQL", "API"],
    github: "",
    live: "https://workdo.io/ticketgo-support-ticket-system/",
    image: "/images/projects/ticketgo.webp",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    title: "Taskly Saas",
    description: "Simplify project management with Taskly - the top-rated SaaS solution by Workdo.io. Organize tasks, track progress, and deliver projects on time.",
    tech: ["Laravel", "MySQL", "API"],
    github: "",
    live: "https://workdo.io/taskly-project-management-system-saas/",
    image: "/images/projects/taskly-saas.webp",
    stars: 0,
    forks: 0,
    featured: false,
  },
  {
    title: "EstateBlock",
    description: "List of all MLS® Real Estate Listings: Houses, Condos, Apartments, Townhomes and Land for sale in Canada | EstateBlock",
    tech: ["PHP", "MySQL", "REST API", "API"],
    github: "",
    live: "https://www.estateblock.com/",
    image: "/images/projects/estateblock.webp",
    stars: 0,
    forks: 0,
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className={`glass-morphism rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 ${project.featured ? "ring-2 ring-purple-500/50" : ""}`}>
      {project.featured && <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 absolute top-4 right-4 rounded-full z-10">Featured</div>}

      <div className="relative overflow-hidden">
        <div className="w-full h-48 relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 flex items-center justify-center absolute inset-0 hidden">
            <Code className="w-16 h-16 text-white/30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {(project.github || project.live) && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors" target="_blank">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors" target="_blank">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors">{project.title}</h3>
          {(project.stars > 0 || project.forks > 0) && (
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              {project.stars > 0 && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stars}</span>
                </div>
              )}
              {project.forks > 0 && (
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {project.description && <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="bg-gray-800/50 px-3 py-1 rounded-full text-xs text-gray-300 border border-gray-700 hover:border-purple-500 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="projects" className="py-20 pt-20 relative bg-black/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Recent <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">Here are a few projects I've worked on recently.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="text-center mt-12">
          <a href="https://github.com/preyash009" className="inline-flex items-center gap-3 glass-morphism px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 group" target="_blank">
            <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
