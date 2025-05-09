import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import TrustedSection from "./components/home/TrustedSection";
import ServicesSection from "./components/home/ServicesSection";
import PhilosophySection from "./components/home/PhilosophySection";
import ProjectsSection from "./components/home/ProjectsSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import GallerySection from "./components/home/GallerySection";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <main className="p-0 bg-neutral w-full">
      <div className="relative max-w-450 mx-auto">
        <HeroSection />
        <AboutSection />
        <TrustedSection />
        <ServicesSection />
        <PhilosophySection />
        <ProjectsSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </div>
    </main>
  );
}
