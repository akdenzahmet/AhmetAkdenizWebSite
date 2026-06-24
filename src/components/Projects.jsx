import React, { useState } from 'react';
import { ExternalLink, Map, Settings, Globe, TrendingUp, Activity, LineChart } from 'lucide-react';
import { Github } from './Icons';
import links from '../data/links';

// Project images
import clinicImg from '../assets/projects/clinic.png';
import georiskImg from '../assets/projects/georisk.png';
import wso2Img from '../assets/projects/wso2.png';
import chefFatihImg from '../assets/projects/chef-fatih.png';
import tradebotImg from '../assets/projects/tradebot.png';
import bistRadarImg from '../assets/projects/bist-radar.png';

const Projects = ({ t }) => {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const isRealLink = (url) => {
    return url && url !== '#' && !url.startsWith('BURAYA_') && url.trim() !== '';
  };

  // ── Featured Projects (3×2 balanced grid, ordered per user specification) ──
  const featuredProjects = [
    {
      id: 2,
      title: 'GeoRisk Analyzer',
      type: t.typeGeoRisk,
      desc: t.geoRiskDesc,
      features: [t.geoRiskF1, t.geoRiskF2, t.geoRiskF3],
      techs: ['React', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Docker'],
      github: links.geoRiskGithub,
      demo: links.geoRiskDemo,
      gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
      icon: <Map size={32} style={{ color: '#ffffff' }} />,
      image: georiskImg
    },
    {
      id: 1,
      title: 'Clinic Automation System',
      type: t.typeClinic,
      desc: t.clinicDesc,
      features: [t.clinicF1, t.clinicF2, t.clinicF3],
      techs: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
      github: links.clinicGithub,
      demo: links.clinicDemo,
      gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      icon: <Activity size={32} style={{ color: '#ffffff' }} />,
      image: clinicImg
    },
    {
      id: 4,
      title: 'WSO2 Configuration Importer',
      type: t.typeWso2,
      desc: t.wso2Desc,
      features: [t.wso2F1, t.wso2F2, t.wso2F3],
      techs: ['Java', 'Spring Boot', 'WSO2', 'SCIM2', 'REST API'],
      github: links.wso2Github,
      demo: '',
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      icon: <Settings size={32} style={{ color: '#ffffff' }} />,
      image: wso2Img
    },
    {
      id: 3,
      title: 'BIST RADAR PRO',
      type: t.bistRadarType,
      desc: t.bistRadarDesc,
      features: [t.bistRadarF1, t.bistRadarF2, t.bistRadarF3],
      techs: ['Python', 'yfinance', 'Pandas', 'Vanilla JS', 'Tailwind'],
      github: links.bistRadarGithub,
      demo: links.bistRadarDemo,
      gradient: 'linear-gradient(135deg, #ef4444, #f59e0b)',
      icon: <LineChart size={32} style={{ color: '#ffffff' }} />,
      image: bistRadarImg,
      isDev: true
    },
    {
      id: 6,
      title: 'AKDENTRADEBOT PRO',
      type: t.tradebotType,
      desc: t.tradebotDesc,
      features: [t.tradebotF1, t.tradebotF2, t.tradebotF3],
      techs: ['React', 'FastAPI', 'PostgreSQL', 'WebSocket', 'Docker'],
      github: links.tradebotGithub,
      demo: '',
      gradient: 'linear-gradient(135deg, #1f2937, #4b5563)',
      icon: <TrendingUp size={32} style={{ color: '#ffffff' }} />,
      image: tradebotImg,
      isDev: true
    },
    {
      id: 5,
      title: 'Chef Fatih Website',
      type: t.typeChefFatih,
      desc: t.chefFatihDesc,
      features: [t.chefFatihF1, t.chefFatihF2, t.chefFatihF3],
      techs: ['React', 'Vite', 'HTML5', 'CSS3'],
      github: links.chefFatihGithub,
      demo: links.chefFatihDemo,
      gradient: 'linear-gradient(135deg, #6366f1, #a855f7)',
      icon: <Globe size={32} style={{ color: '#ffffff' }} />,
      image: chefFatihImg
    }
  ];


  // ── Reusable card renderer ──────────────────────────────────────────────────
  const renderCard = (project) => {
    const hasRealDemo = isRealLink(project.demo);
    const showImage = project.image && !imgErrors[project.id];

    return (
      <div key={project.id} className="project-card card">
        {/* Visual Header */}
        <div
          className="project-image-container"
          style={{
            background: project.gradient,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {project.isDev && (
            <span className="badge project-badge-dev" style={{ zIndex: 2 }}>
              {t.badgeDev}
            </span>
          )}
          {showImage ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => handleImgError(project.id)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              className="project-card-image"
            />
          ) : (
            project.icon
          )}
        </div>

        {/* Content Body */}
        <div className="project-body">
          <span className="project-type-tag">{project.type}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.desc}</p>

          <ul className="project-features">
            {project.features.map((feature, idx) => (
              <li key={idx} title={feature}>{feature}</li>
            ))}
          </ul>

          <div className="project-techs">
            {project.techs.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>

          <div className="project-footer">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={16} />
              <span>{t.btnGithub}</span>
            </a>

            {hasRealDemo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={16} />
                <span>{t.btnDemo}</span>
              </a>
            ) : (
              <button className="btn btn-primary" disabled style={{ gap: '4px' }}>
                <span>{t.btnSoon}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section animate-fade-in">
      {/* ── Featured Projects ── */}
      <h2 className="section-title">{t.title}</h2>
      <p className="section-subtitle">{t.subtitle}</p>

      <div className="projects-grid">
        {featuredProjects.map(renderCard)}
      </div>
    </section>
  );
};

export default Projects;
