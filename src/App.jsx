import { useState, useEffect } from 'react';
import useScrollAnimations from './hooks/useScrollAnimations';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './sections/AboutSection';
import ProfessionalExperienceSection from './sections/ProfessionalExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage on mount
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  useScrollAnimations();

  useEffect(() => {
    // Update localStorage and DOM when isDark changes
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <HeroSection />
      <AboutSection />
      <ProfessionalExperienceSection />
      <ProjectsSection isDark={isDark} />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
