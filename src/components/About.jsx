import React from 'react';
import { Layers, Server, Database, Map, Container, Award } from 'lucide-react';

const About = ({ t }) => {
  const focusAreas = [
    {
      title: t.focus1Title,
      icon: <Layers size={22} />,
      desc: t.focus1Desc
    },
    {
      title: t.focus2Title,
      icon: <Server size={22} />,
      desc: t.focus2Desc
    },
    {
      title: t.focus3Title,
      icon: <Database size={22} />,
      desc: t.focus3Desc
    },
    {
      title: t.focus4Title,
      icon: <Map size={22} />,
      desc: t.focus4Desc
    },
    {
      title: t.focus5Title,
      icon: <Container size={22} />,
      desc: t.focus5Desc
    }
  ];

  return (
    <section id="about" className="section animate-fade-in">
      <h2 className="section-title">{t.title}</h2>
      <p className="section-subtitle">{t.subtitle}</p>

      <div className="about-grid">
        {/* Left text */}
        <div className="about-text">
          {/* Info Badges */}
          <div className="about-badges">
            <div className="about-badge">
              <span className="about-badge-icon">{t.badge1Icon}</span>
              <div className="about-badge-content">
                <span className="about-badge-title">{t.badge1Title}</span>
                <span className="about-badge-sub">{t.badge1Sub}</span>
              </div>
            </div>
            <div className="about-badge">
              <span className="about-badge-icon">{t.badge2Icon}</span>
              <div className="about-badge-content">
                <span className="about-badge-title">{t.badge2Title}</span>
                <span className="about-badge-sub">{t.badge2Sub}</span>
              </div>
            </div>
          </div>

          <p>{t.text1}</p>
          <p>{t.text2}</p>
          <p>{t.text3}</p>
        </div>

        {/* Right focus cards */}
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <div key={index} className="focus-card card" style={{ padding: '20px' }}>
              <div className="focus-icon-box">
                {area.icon}
              </div>
              <div>
                <h4>{area.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
