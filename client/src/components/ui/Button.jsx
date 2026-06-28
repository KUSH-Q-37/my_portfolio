import { motion } from "motion/react";

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
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-xl shadow-violet-600/25 hover:scale-[1.03] hover:shadow-violet-600/35",
    secondary:
      "bg-slate-900/80 text-slate-100 border border-white/10 shadow-lg shadow-black/20 hover:bg-slate-900 hover:scale-[1.02]",
  };

  const componentProps = {
    className: `${baseStyles} ${variants[variant]} ${className}`,
    whileHover: { y: -1 },
    whileTap: { scale: 0.98 },
    ...props,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        {...componentProps}
      >
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