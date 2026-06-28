import { motion } from "motion/react";
import Container from "../ui/Container";
import { rotateInLeft, staggerContainer, staggerItem } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 bg-slate-950/40">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-sky-300">Testimonials</span>
          <h2 className="mt-4 text-4xl font-bold text-white">What others say about working with me.</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {portfolioData.testimonials.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              variants={rotateInLeft}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-xl shadow-black/20 hover:border-sky-400/40 transition cursor-pointer"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-4xl text-sky-300/20"
              >
                "
              </motion.span>
              <p className="text-slate-200 leading-8 italic">{item.quote}</p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-sm font-semibold text-sky-300"
              >
                {item.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
