import { motion } from "motion/react";
import Container from "../ui/Container";
import { popIn, staggerContainer } from "../../animations/variants";
import { portfolioData } from "../../data/portfolioData";

function ServicesSection() {
  return (
    <section id="services" className="py-28">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-sky-300">Services</span>
          <h2 className="mt-4 text-4xl font-bold text-white">Services for polished products, built with precision.</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid gap-6 lg:grid-cols-3"
        >
          {portfolioData.services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={popIn}
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)" }}
              className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 shadow-2xl shadow-black/20 backdrop-blur-3xl transition hover:border-sky-400/50 hover:bg-slate-900/80 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-300 transition">{service.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="h-11 w-11 rounded-2xl bg-sky-500/10 text-sky-300 flex items-center justify-center text-lg group-hover:bg-sky-500/20 transition"
                >
                  •
                </motion.div>
              </div>
              <p className="mt-5 text-slate-300 leading-7">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default ServicesSection;
