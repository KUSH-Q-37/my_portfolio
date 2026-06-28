import { motion } from "motion/react";
import { useEffect, useState } from "react";

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numValue = parseInt(value.replace(/\D/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");
    let start = 0;
    const increment = numValue / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  const suffix = value.replace(/[0-9]/g, "");
  return <span>{count}{suffix}</span>;
}

export default AnimatedCounter;
