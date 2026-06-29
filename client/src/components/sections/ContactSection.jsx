import { motion } from "motion/react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { portfolioData } from "../../data/portfolioData";

function ContactSection() {
  return (
    <section id="contact" className="pt-36 pb-16 lg:py-28 overflow-hidden">
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

          {/* Right Column: Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[2rem] border border-white/10 p-5 md:p-8 shadow-2xl shadow-black/25 backdrop-blur-lg md:backdrop-blur-lg bg-slate-950/90 md:bg-slate-950/50"
          >
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
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
                // Check if this specific link is an email protocol
                const isMail = item.href.startsWith("mailto:");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    // FIXED: Only open in a new tab if it's NOT an email link
                    target={isMail ? "_self" : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    className="flex w-full items-center gap-3 md:gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6 transition hover:bg-slate-900/90 hover:border-sky-400/30 active:bg-slate-900/90 active:border-sky-400/30 active:scale-[0.98]"
                  >
                    <div className="shrink-0 rounded-full bg-sky-500/10 p-3 text-sky-300">
                      <Icon size={20} className="md:h-6 md:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="truncate text-sm md:text-lg font-semibold text-white">
                        {item.value}
                      </p>
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