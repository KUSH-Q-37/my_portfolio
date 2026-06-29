import { motion } from "motion/react";
import Container from "../ui/Container";
import SpotlightCard from "../ui/SpotlightCard";
import { scaleInUp, staggerContainer } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function SkillsSection() {
  return (
    <section id="skills" className="py-28 relative">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-[#7C3AED] font-semibold">
            Technical Arsenal
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Core strengths across full-stack development, data analysis, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#3B82F6]">
              machine learning.
            </span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-6 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2"
        >
          {portfolioData.skills.map((group) => (
            <motion.div
              key={group.category}
              variants={scaleInUp}
              className="h-full"
            >
              <SpotlightCard className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white">
                  {group.category}
                </h3>
                <div className="mt-6 flex flex-wrap gap-3 flex-1 content-start">
                  {group.items.map((item, idx) => (
                    <motion.span
                      key={item}
                      // ... existing props
                      whileHover={{ scale: 1.05 }}
                      whileTap={{
                        scale: 0.95,
                      }} /* NEW: Added for mobile tap feedback */
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 active:border-[#3B82F6]/50 active:bg-[#3B82F6]/10 hover:text-white"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default SkillsSection;
