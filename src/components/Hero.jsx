import React, { useState } from 'react';
import { ArrowRight, MapPin, Briefcase, Code, Terminal, Layers, GraduationCap, Award, Mail } from 'lucide-react';
import { Github } from './Icons';
import links from '../data/links';
import profileImg from '../assets/profile.jpg';

const Hero = ({ t }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="section animate-fade-in" style={{ paddingBottom: '40px' }}>
      <div className="hero-grid">
        {/* Left Side Content */}
        <div className="hero-content">
          <span className="hero-greeting">{t.hero.greeting}</span>
          <h1 className="hero-title">
            <span>{t.hero.title}</span>
          </h1>
          {t.hero.subtitle && <h2 className="hero-subtitle">{t.hero.subtitle}</h2>}
          <p className="hero-desc">
            {t.hero.desc}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>{t.hero.btnProjects}</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>{t.hero.btnContact}</span>
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={18} />
              <span>{t.hero.btnGithub}</span>
            </a>
          </div>
        </div>

        {/* Right Side Info Card */}
        <div className="profile-card">
          <div className="profile-card-header">
            <div className="profile-avatar">
              {!imgError && profileImg ? (
                <img 
                  src={profileImg} 
                  alt="Ahmet Akdeniz" 
                  onError={() => setImgError(true)} 
                  className="profile-img"
                />
              ) : (
                <div className="profile-avatar-fallback">AA</div>
              )}
            </div>
            <div className="profile-info">
              <h3>{t.hero.profileName}</h3>
              <p>{t.hero.profileRole}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="profile-detail-item">
              <Briefcase size={18} />
              <span>{t.hero.profileDetail1}</span>
            </div>
            <div className="profile-detail-item">
              <Terminal size={18} />
              <span>{t.hero.profileDetail2}</span>
            </div>
            <div className="profile-detail-item">
              <Code size={18} />
              <span>{t.hero.profileDetail3}</span>
            </div>
            <div className="profile-detail-item">
              <Layers size={18} />
              <span>{t.hero.profileDetail4}</span>
            </div>
            <div className="profile-detail-item">
              <MapPin size={18} />
              <span>{t.hero.profileDetail5}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="stats-container">
        <div className="card stat-card">
          <div className="stat-number">{t.stats.projectsNum}</div>
          <div className="stat-label">{t.stats.projectsLabel}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-number">{t.stats.internshipNum}</div>
          <div className="stat-label">{t.stats.internshipLabel}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-number">{t.stats.degreeNum}</div>
          <div className="stat-label">{t.stats.degreeLabel}</div>
        </div>
        <div className="card stat-card">
          <div className="stat-number">{t.stats.fullstackNum}</div>
          <div className="stat-label">{t.stats.fullstackLabel}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
