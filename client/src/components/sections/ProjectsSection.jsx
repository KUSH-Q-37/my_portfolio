import { motion } from "motion/react";
import { FiGithub } from "react-icons/fi";
import Container from "../ui/Container";
import { scaleInUp, staggerContainer, slideUp } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function ProjectsSection() {
  return (
    <section id="work" className="py-32 relative overflow-hidden bg-slate-950/50">
      <Container className="relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={slideUp} className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold">Encrypted Archives</span>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Selected data sets & technical implementations.
            </h2>
          </motion.div>

          {/* CHANGED: lg:grid-cols-3 aligns all 3 projects perfectly in a single row */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {portfolioData.projects.map((project) => (
              <motion.div
                key={project.title}
                variants={scaleInUp} // Standard, lightweight fade-in animation
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                // FIXED: h-[28rem] locks the size. Removed all the custom margin offsets.
                className="group relative flex flex-col h-[28rem] rounded-[2rem] border border-white/10 bg-[#0A0F1C]/80 p-8 shadow-xl backdrop-blur-xl transition-all hover:border-cyan-400/50"
              >
                {/* Subtle corner accent */}
                <div className="absolute top-4 right-4 h-8 w-8 border border-cyan-500/30 opacity-50 transition-transform group-hover:rotate-45 group-hover:scale-125"></div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-slate-400 leading-relaxed text-sm line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-md bg-cyan-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* mt-auto pushes button exactly to the bottom edge */}
                <div className="mt-auto flex gap-3 pt-6 border-t border-white/5 relative z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  >
                    <FiGithub size={16} />
                    Access Source
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ProjectsSection;