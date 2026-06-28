import { motion } from "motion/react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { scaleInUp, staggerItem } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function ResumeSection() {
  return (
    <section id="resume" className="py-28">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-sky-300">Resume</span>
          <h2 className="mt-4 text-4xl font-bold text-white">Resume highlights and quick PDF access.</h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_0.9fr]">
          <motion.div
            variants={scaleInUp}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-3xl transition"
          >
            <h3 className="text-xl font-semibold text-white">Key strengths</h3>
            <ul className="mt-6 space-y-4 text-slate-300 leading-8">
              {portfolioData.resumeHighlights.map((highlight, idx) => (
                <motion.li
                  key={highlight}
                  variants={staggerItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex gap-3"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={scaleInUp}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-3xl transition"
          >
            <p className="text-slate-300 leading-8">
              Download the PDF to view my full education, projects, skills, and experience in one place.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  href={portfolioData.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  href={portfolioData.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download PDF
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default ResumeSection;
