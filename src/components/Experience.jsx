import React from 'react';

const Experience = ({ t }) => {
  if (!t) return null;

  const experiences = [
    {
      id: 1,
      company: 'STM',
      role: t.stm1Role,
      date: t.stm1Date,
      bullets: [
        t.stm1B1,
        t.stm1B2,
        t.stm1B3
      ],
      techs: t.stm1Techs || []
    },
    {
      id: 2,
      company: 'STM',
      role: t.stm2Role,
      date: t.stm2Date,
      bullets: [
        t.stm2B1,
        t.stm2B2,
        t.stm2B3
      ],
      techs: t.stm2Techs || []
    }
  ];

  return (
    <section id="experience" className="section animate-fade-in">
      <h2 className="section-title">{t.title}</h2>
      <p className="section-subtitle">{t.subtitle}</p>

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <ul className="timeline-bullets" style={{ marginBottom: '16px' }}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              
              {/* Experience Technologies */}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                  {t.posTitle}
                </span>
                <div className="experience-tags">
                  {exp.techs.map((tech) => (
                    <span key={tech} className="tag" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
