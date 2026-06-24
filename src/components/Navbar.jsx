import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ChevronDown, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import links from '../data/links';

const Navbar = ({ theme, toggleTheme, language, toggleLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCvDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const navItems = [
    { name: t.home, href: '#home' },
    { name: t.about, href: '#about' },
    { name: t.projects, href: '#projects' },
    { name: t.services, href: '#services' },
    { name: t.process, href: '#process' },
    { name: t.experience, href: '#experience' },
    { name: t.skills, href: '#skills' },
    { name: t.contact, href: '#contact' }
  ];

  return (
    <nav className="navbar animate-fade-in">
      <div className="navbar-container">
        <a href="#home" className="logo">
          Ahmet Akdeniz<span className="logo-dot">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Socials - Desktop only */}
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>

          {/* CV Dropdown */}
          <div className="dropdown-container" ref={dropdownRef}>
            <button 
              className="btn btn-secondary" 
              onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
            >
              <Download size={16} />
              <span>{t.cvDownload}</span>
              <ChevronDown size={14} style={{ transform: cvDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
            </button>
            <div className={`dropdown-menu ${cvDropdownOpen ? 'show' : ''}`}>
              <a 
                href={links.cvTr} 
                download="Ahmet_Akdeniz_CV_TR.pdf" 
                className="dropdown-item"
                onClick={() => setCvDropdownOpen(false)}
              >
                {t.cvTr}
              </a>
              <a 
                href={links.cvEn} 
                download="Ahmet_Akdeniz_CV_EN.pdf" 
                className="dropdown-item"
                onClick={() => setCvDropdownOpen(false)}
              >
                {t.cvEn}
              </a>
            </div>
          </div>

          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage} 
            className="btn-icon" 
            style={{ fontWeight: '700', fontSize: '0.85rem' }}
            aria-label="Dil Değiştir / Toggle Language"
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>

          {/* Theme Switcher */}
          <button onClick={toggleTheme} className="btn-icon" aria-label="Temayı Değiştir">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Menüyü Aç/Kapat">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
