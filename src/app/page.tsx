import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import TrustedSection from "./components/home/TrustedSection";
import ServicesSection from "./components/home/ServicesSection";
import PhilosophySection from "./components/home/PhilosophySection";

export default function Home() {
  return (
    <main className="p-0 bg-neutral w-full">
      <div className="max-w-450 mx-auto">
        <HeroSection />
        <AboutSection />
        <TrustedSection />
        <ServicesSection />
        <PhilosophySection />
      </div>
    </main>
  );
}
