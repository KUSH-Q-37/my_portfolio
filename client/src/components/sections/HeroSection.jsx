import { motion } from "motion/react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { scaleInUp, staggerContainer, slideUp } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden" aria-label="Hero">
      <Container className="relative z-10 w-full">
        <div className="grid gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left Column: Typography */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            
            {/* Status Indicator */}
            <motion.div variants={slideUp} className="flex items-center gap-3 mb-8">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </div>
              <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                System Online • Available for work
              </span>
            </motion.div>
            
            {/* Cinematic Blur Name Reveal - FIXED PADDING */}
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              // FIXED: Added pb-4 here to give the flex container breathing room at the bottom
              className="text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1.05] tracking-tight text-white flex flex-wrap gap-x-4 pb-4"
            >
              {portfolioData.name.split(" ").map((word, index) => (
                <motion.span 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  // FIXED: Added pb-4 here. This forces the background gradient to extend lower than the letter "j".
                  className="inline-block pb-4 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, filter: "blur(10px)" },
                visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, delay: 0.4 } }
              }}
              className="mt-6 max-w-xl text-slate-400 leading-relaxed text-[clamp(1rem,2vw,1.15rem)] font-light"
            >
              {portfolioData.heroTagline}
            </motion.p>
            
            <motion.div variants={slideUp} className="mt-10 flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Initialize Contact
              </Button>
              <Button variant="secondary" href={portfolioData.resumeUrl} target="_blank" rel="noreferrer" download>
                Extract Data (Resume)
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Data HUD Card */}
          <motion.div initial="hidden" animate="visible" variants={scaleInUp} className="relative lg:ml-auto w-full max-w-lg">
            
            <motion.div className="relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-950/80 p-8 shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] backdrop-blur-xl">
              
              {/* Arcturis Scanning Laser Effect */}
              <motion.div 
                animate={{ y: ["-100%", "200%"] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                className="pointer-events-none absolute inset-0 h-1/2 w-full border-t border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-transparent"
              />

              <div className="relative z-10 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-bold mb-2">Data Processing</p>
                  <h2 className="text-2xl font-semibold text-white">Full-Stack Architecture</h2>
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                    Engineering robust backend pipelines and highly responsive visual interfaces.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Algorithms", value: "Python / AI", delay: 0.5 },
                    { label: "Frontend", value: "React / Motion", delay: 0.6 },
                    { label: "Backend", value: "Node / SQL", delay: 0.7 },
                    { label: "Analytics", value: "Data Modeling", delay: 0.8 }
                  ].map((item) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay, duration: 0.5 }}
                      className="group border-l-2 border-cyan-500/30 pl-4 py-1 transition-colors hover:border-cyan-400"
                    >
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-cyan-400/80 transition-colors">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-slate-200">{item.value}</p>
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