import { motion } from "motion/react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { portfolioData } from "../../data/portfolioData";

function ContactSection() {
  return (
    <section id="contact" className="py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Left Column: Heading & Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something refined and impactful."
              description="Send a message to discuss your next project, collaboration, or internship opportunity."
            />
          </motion.div>

          {/* Right Column: Contact Links (Replaces the Form) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-black/25 backdrop-blur-3xl"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm available for software development, full-stack engineering, and data-driven projects. 
              Use the links below to get in touch and I'll reply with a clear next step.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: FiMail,
                  label: "Email",
                  value: portfolioData.contact.email,
                  href: `mailto:${portfolioData.contact.email}`,
                },
                {
                  icon: FiLinkedin,
                  label: "LinkedIn",
                  value: "Connect",
                  href: portfolioData.contact.linkedin,
                },
                {
                  icon: FiGithub,
                  label: "GitHub",
                  value: "View projects",
                  href: portfolioData.contact.github,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-slate-900/90 hover:border-sky-400/30"
                  >
                    <div className="rounded-full bg-sky-500/10 p-3 text-sky-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                      <p className="text-lg font-semibold text-white">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;