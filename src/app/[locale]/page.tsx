import AboutSection from "../components/AboutSection";
import Contact from "../components/ContactSection";
import Footer from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import TechnologiesSection from "../components/TechnologiesSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <HeroSection />
      <div className="container mt-10 mx-auto px-12 py-4">
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
