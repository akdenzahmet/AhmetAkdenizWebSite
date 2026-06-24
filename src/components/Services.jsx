import React from 'react';
import { Globe, LayoutDashboard, Calendar, Cpu, Database, Map } from 'lucide-react';

const Services = ({ t }) => {
  const servicesData = [
    {
      title: t.service1Title,
      desc: t.service1Desc,
      icon: <Globe size={24} />
    },
    {
      title: t.service2Title,
      desc: t.service2Desc,
      icon: <LayoutDashboard size={24} />
    },
    {
      title: t.service3Title,
      desc: t.service3Desc,
      icon: <Calendar size={24} />
    },
    {
      title: t.service4Title,
      desc: t.service4Desc,
      icon: <Cpu size={24} />
    },
    {
      title: t.service5Title,
      desc: t.service5Desc,
      icon: <Database size={24} />
    },
    {
      title: t.service6Title,
      desc: t.service6Desc,
      icon: <Map size={24} />
    }
  ];

  return (
    <section id="services" className="section animate-fade-in">
      <h2 className="section-title">{t.title}</h2>
      <p className="section-subtitle">{t.subtitle}</p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card card">
            <div className="service-icon-box">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
