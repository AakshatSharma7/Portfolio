import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { HandsOnExperience } from './components/HandsOnExperience';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`${theme} min-h-screen bg-background text-foreground relative overflow-x-hidden`}>
      <ScrollProgress />
      <Navigation theme={theme} onThemeToggle={toggleTheme} />
      <NeuralBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <HandsOnExperience />
        <TechStack />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}