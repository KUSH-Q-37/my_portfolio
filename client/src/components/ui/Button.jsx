import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

function Button({
  children,
  variant = "primary",
  className = "",
  href,
  target,
  rel,
  download,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for the magnetic pull
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-xl shadow-violet-600/25 hover:shadow-violet-600/40",
    secondary:
      "bg-slate-900/80 text-slate-100 border border-white/10 shadow-lg shadow-black/20 hover:bg-slate-900",
  };

  const componentProps = {
    ref,
    onMouseLeave: handleMouseLeave,
    style: { x: mouseXSpring, y: mouseYSpring },
    className: `${baseStyles} ${variants[variant]} ${className}`,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    ...props,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} download={download} {...componentProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...componentProps}>
      {children}
    </motion.button>
  );
}

export default Button;