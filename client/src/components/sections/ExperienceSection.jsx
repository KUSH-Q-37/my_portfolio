import { motion } from "motion/react";
import Container from "../ui/Container";
import { blurInUp, staggerContainer, staggerItem } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function ExperienceSection() {
  return (
    <section id="experience" className="py-28 bg-slate-950/40">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-sky-300">Experience</span>
          <h2 className="mt-4 text-4xl font-bold text-white">A polished timeline structure waiting for your resume story.</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 space-y-6"
        >
          {portfolioData.experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${index}`}
              variants={blurInUp}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl hover:border-sky-400/30 hover:bg-white/10 transition"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                  <p className="mt-1 text-sky-200">{item.role}</p>
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-2 text-slate-300 leading-7">
                {item.highlights.map((highlight, idx) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-2"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
