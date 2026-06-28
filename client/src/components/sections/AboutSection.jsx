import { motion } from "motion/react";
import Container from "../ui/Container";
import AnimatedCounter from "../ui/AnimatedCounter";
import { slideUp, staggerContainer, staggerItem } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function AboutSection() {
  return (
    <section id="about" className="py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUp}
          className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20 backdrop-blur-3xl"
        >
          <div className="space-y-8">
            <span className="text-sm uppercase tracking-[0.3em] text-sky-300">About</span>
            <h2 className="text-4xl font-bold text-white">A developer who blends engineering, analytics, and product thinking.</h2>
            <p className="text-slate-300 leading-8 text-lg">
              {portfolioData.about.summary}
            </p>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_0.9fr]">
              <div className="rounded-3xl bg-slate-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Technical Focus</p>
                <p className="mt-3 text-slate-200">Building practical solutions with React, Node.js, MongoDB, SQL, and Python.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Learning Mindset</p>
                <p className="mt-3 text-slate-200">Combining problem-solving, continuous learning, and a strong interest in innovation.</p>
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {portfolioData.metrics?.map((metric) => (
                <motion.div
                  key={metric.label}
                  variants={staggerItem}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 text-center hover:border-sky-400/50 hover:bg-slate-900/90 transition"
                >
                  <p className="text-3xl font-bold text-sky-300">
                    <AnimatedCounter value={metric.value} duration={1.5} />
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default AboutSection;
