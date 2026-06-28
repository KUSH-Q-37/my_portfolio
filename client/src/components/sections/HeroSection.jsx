import { motion } from "motion/react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { scaleInUp, staggerContainer, slideUp, floatingAnimation } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* 1. Creative: Subtle Parallax Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[-10%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-violet-600/20 blur-[120px]"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] h-[35rem] w-[35rem] rounded-full bg-blue-600/20 blur-[100px]"
      />

      <Container className="relative z-10 w-full">
        <div className="grid gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* 2. Animative: Staggered Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={slideUp}>
              <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-5 py-2 text-sm font-semibold tracking-[0.28em] text-sky-300 uppercase backdrop-blur-md">
                {portfolioData.title}
              </span>
            </motion.div>
            
            {/* 3. Responsive: Fluid Typography using clamp() */}
            <motion.h1 
              variants={slideUp}
              className="mt-8 text-[clamp(3rem,6vw,5rem)] font-black leading-[1.1] tracking-tight text-white"
            >
              {portfolioData.name}
            </motion.h1>
            
            <motion.p 
              variants={slideUp}
              className="mt-6 max-w-xl text-slate-400 leading-relaxed text-[clamp(1rem,2vw,1.15rem)]"
            >
              {portfolioData.heroTagline}
            </motion.p>
            
            <motion.div variants={slideUp} className="mt-10 flex flex-wrap gap-5">
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact me
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
                Explore skills
              </Button>
              <Button
                variant="secondary"
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
              >
                Download resume
              </Button>
            </motion.div>
          </motion.div>

          {/* 4. Attractive: Deep Glassmorphism & Floating Right Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleInUp}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* The main floating container */}
            <motion.div 
              variants={floatingAnimation}
              className="rounded-[2.5rem] border border-white/10 bg-[#0F172A]/80 p-8 shadow-2xl backdrop-blur-3xl transition-colors hover:border-white/20"
            >
              <div className="space-y-6">
                <div className="rounded-[2rem] border border-white/5 bg-[#111827]/80 p-6 shadow-inner">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#7C3AED] font-bold">What I build</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">Elegant, reliable digital experiences</h2>
                  <p className="mt-3 text-slate-400 leading-relaxed text-sm">
                    I turn product ideas into polished web apps using React, Node.js, Python, and clean modern design.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "UI / UX", value: "Beautiful interfaces" },
                    { label: "Performance", value: "Fast loading" },
                    { label: "Scalability", value: "Future-ready code" },
                    { label: "Data", value: "Insightful analytics" }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="rounded-3xl border border-white/5 bg-[#111827]/50 p-5 cursor-default transition-colors"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[#3B82F6] font-medium">{item.label}</p>
                      <p className="mt-2 text-md font-semibold text-white">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default HeroSection;