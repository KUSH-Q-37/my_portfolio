import Background from "./components/common/Background";
import ScrollProgress from "./components/common/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import ResumeSection from "./components/sections/ResumeSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <>
      {/* Premium Vercel/Linear style noise overlay (Kept for the premium texture) */}
      

      <Background />
      <ScrollProgress />
      <Navbar />

      {/* FIXED: Added w-full, overflow-x-hidden, and base colors to completely lock the global layout */}
      <main className="relative z-10 w-full min-h-screen overflow-x-hidden bg-slate-950 text-slate-50 antialiased selection:bg-sky-500/30">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;