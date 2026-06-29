import { motion } from "motion/react";

function SectionHeading({ eyebrow, title, description }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const wordVariants = {
    // Arcturis signature: heavy blur coming into focus
    hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const words = title.split(" ");

  return (
    <div className="max-w-3xl">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <span className="h-[1px] w-8 bg-sky-400"></span>
        <span className="text-xs uppercase tracking-[0.3em] text-sky-300 font-semibold">{eyebrow}</span>
      </motion.div>
      
      <motion.h2 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl flex flex-wrap gap-x-3 gap-y-2"
      >
        {words.map((word, index) => (
          <motion.span 
            key={index}
            variants={wordVariants} 
            className="inline-block bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {description ? (
        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-2xl text-slate-400 leading-relaxed text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}

export default SectionHeading;