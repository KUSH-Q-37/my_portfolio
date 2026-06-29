import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const mobileMenuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.24 } },
  open: { opacity: 1, height: "auto", transition: { duration: 0.24 } },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    
    // Close menu first, then scroll with a delay to ensure layout stability
    setIsOpen(false);
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 backdrop-blur-md md:backdrop-blur-3xl bg-slate-950/90 md:bg-slate-950/50 border-b border-white/10 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.75)]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="text-xl font-bold tracking-tight text-white z-10"
          aria-label="Go to home"
        >
          KUSH BHARDWAJ
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex z-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-slate-900" : "text-slate-300 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 z-10">
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="overflow-hidden lg:hidden"
      >
        <div className="mx-auto w-full px-4 pb-6 pt-2 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-md md:backdrop-blur-3xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-base font-medium transition-all duration-300 ease-in-out active:scale-[0.98] active:bg-white/10 ${
                      isActive
                        ? "bg-white/10 text-white shadow-inner border border-white/5"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;