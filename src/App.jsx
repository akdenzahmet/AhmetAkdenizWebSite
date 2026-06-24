import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';
import translations from './data/translations';

function App() {
  // Theme state initialized from localStorage, defaulting to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  // Language state initialized from localStorage, defaulting to 'tr'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage === 'en' ? 'en' : 'tr';
  });

  // Effect to toggle the 'dark' class on documentElement
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Effect to save language changes to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Track mouse coordinates for premium ambient glow spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
  };

  // Get active translations bundle
  const t = translations[language];

  return (
    <>
      {/* Global Background Image */}
      <div className="global-bg-image"></div>

      {/* Global Background Blobs */}
      <div className="global-bg-blobs">
        <div className="global-blob global-blob-1"></div>
        <div className="global-blob global-blob-2"></div>
        <div className="global-blob global-blob-3"></div>
        <div className="global-blob global-blob-4"></div>
      </div>

      {/* Grid Overlay with Spotlight Masking */}
      <div className="grid-overlay"></div>

      {/* Premium Cursor Ambient Glow */}
      <div className="mouse-glow"></div>

      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        language={language} 
        toggleLanguage={toggleLanguage} 
        t={t.nav} 
      />
      <main>
        <Hero t={t} />
        <div className="section-divider"></div>
        
        <FadeIn><About t={t.about} /></FadeIn>
        <div className="section-divider"></div>
        
        <FadeIn><Projects t={t.projects} /></FadeIn>
        <div className="section-divider"></div>
        
        <FadeIn><Services t={t.services} /></FadeIn>
        <div className="section-divider"></div>
        
        <FadeIn><WorkProcess t={t.process} /></FadeIn>
        <div className="section-divider"></div>
        
        <FadeIn><Experience t={t.experience} /></FadeIn>
        <div className="section-divider"></div>
        
        <FadeIn><Skills t={t.skills} /></FadeIn>
        <div className="section-divider"></div>
        
        <FadeIn><CVSection t={t.cv} /></FadeIn>
        <div className="section-divider"></div>
        
        <FadeIn><Contact t={t.contact} /></FadeIn>
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;

