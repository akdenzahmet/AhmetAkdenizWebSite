import React from 'react';
import { Code2, Monitor, Server, Database, Wrench, Cloud } from 'lucide-react';

const Skills = ({ t }) => {
  if (!t) return null;

  const skillsData = [
    {
      category: t.catProgramming,
      desc: t.catProgrammingDesc,
      icon: <Code2 size={24} />,
      level: t.levelAdvanced,
      list: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'Dart']
    },
    {
      category: t.catFrontend,
      desc: t.catFrontendDesc,
      icon: <Monitor size={24} />,
      level: t.levelAdvanced,
      list: ['React', 'Vite', 'HTML5', 'CSS3', 'Modern ES6+']
    },
    {
      category: t.catBackend,
      desc: t.catBackendDesc,
      icon: <Server size={24} />,
      level: t.levelAdvanced,
      list: ['Spring Boot', 'FastAPI', 'Hibernate', 'JPA', 'REST API', 'JWT', 'Spring Security', 'Maven']
    },
    {
      category: t.catDatabase,
      desc: t.catDatabaseDesc,
      icon: <Database size={24} />,
      level: t.levelAdvanced,
      list: ['PostgreSQL', 'MySQL', 'MSSQL', 'Firebase', 'PostGIS', 'Redis']
    },
    {
      category: t.catCloud,
      desc: t.catCloudDesc,
      icon: <Cloud size={24} />,  
      level: t.levelIntermediate,
      list: ['Docker', 'VPS', 'Linux', 'Git', 'Deployment']
    },
    {
      category: t.catTools,
      desc: t.catToolsDesc,
      icon: <Wrench size={24} />,
      level: t.levelAdvanced,
      list: ['Git', 'Postman', 'Insomnia', 'IntelliJ IDEA', 'Figma']
    }
  ];

  return (
    <section id="skills" className="section animate-fade-in">
      <h2 className="section-title">{t.title}</h2>
      <p className="section-subtitle">{t.subtitle}</p>

      <div className="skills-grid">
        {skillsData.map((skillGroup, idx) => (
          <div key={idx} className="skills-card card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {skillGroup.icon}
                <span>{skillGroup.category}</span>
              </div>
              <span className={`skill-level-badge ${skillGroup.level.toLowerCase()}`}>
                {skillGroup.level}
              </span>
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.5' }}>
              {skillGroup.desc}
            </p>
            <div className="skills-list" style={{ marginTop: 'auto' }}>
              {skillGroup.list.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
