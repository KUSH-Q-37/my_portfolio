import { motion } from "motion/react";

function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030712]">
      {/* 1. Infinite Data Grid with Radial Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      {/* 2. Slow-Drifting Data Clouds */}
      <motion.div
        style={{ willChange: "transform" }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[15%] w-[45rem] h-[45rem] rounded-full bg-violet-600/20 blur-[130px]"
      />

      <motion.div
        style={{ willChange: "transform" }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 70, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[5%] right-[10%] w-[40rem] h-[40rem] rounded-full bg-cyan-600/20 blur-[120px]"
      />
    </div>
  );
}

export default Background;