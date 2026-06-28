import { useScroll } from "motion/react";

export default function useScrollProgress() {
  const { scrollYProgress } = useScroll();

  return scrollYProgress;
}