import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SpecProjectsSection } from './components/SpecProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#F7D64A] selection:text-[#0F4C81]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
