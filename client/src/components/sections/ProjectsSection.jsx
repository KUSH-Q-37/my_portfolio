import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Container from "../ui/Container";
import { scaleInUp, staggerContainer, slideUp } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function ProjectsSection() {
  return (
    <section id="work" className="py-32 bg-slate-950/50">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={slideUp} className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.3em] text-sky-300">Projects</span>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Selected work that reflects technical depth and product thinking.
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-1 md:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <motion.div
                key={project.title}
                variants={scaleInUp}
                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur-2xl transition hover:border-sky-400/30 active:border-sky-400/30 active:bg-white/10 flex flex-col h-full"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-sky-500/20 px-3 py-1 text-xs font-medium text-sky-300 border border-sky-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/50"
                  >
                    <FiGithub size={16} />
                    View Code
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