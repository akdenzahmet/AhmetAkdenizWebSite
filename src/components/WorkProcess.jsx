import React from 'react';
import { Search, Compass, Code, CheckCircle } from 'lucide-react';

const WorkProcess = ({ t }) => {
  const steps = [
    {
      step: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      icon: <Search size={22} />
    },
    {
      step: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      icon: <Compass size={22} />
    },
    {
      step: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      icon: <Code size={22} />
    },
    {
      step: '04',
      title: t.step4Title,
      desc: t.step4Desc,
      icon: <CheckCircle size={22} />
    }
  ];

  return (
    <section id="process" className="section animate-fade-in">
      <h2 className="section-title">{t.title}</h2>
      <p className="section-subtitle">{t.subtitle}</p>

      <div className="process-grid">
        {steps.map((item, index) => (
          <div key={index} className="process-card card">
            <span className="process-step-num">{item.step}</span>
            <div className="service-icon-box" style={{ width: '44px', height: '44px' }}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
