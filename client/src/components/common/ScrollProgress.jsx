import { motion } from "motion/react";
import useScrollProgress from "../../hooks/useScrollProgress";

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      style={{
        scaleX: progress,
        transformOrigin: "left",
      }}
      className="
      fixed
      top-0
      left-0
      right-0
      h-1
      bg-gradient-to-r
      from-violet-600
      to-blue-500
      z-50
      "
    />
  );
}

export default ScrollProgress;