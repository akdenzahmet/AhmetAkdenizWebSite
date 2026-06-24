import React from 'react';
import { Download, FileText } from 'lucide-react';
import links from '../data/links';

const CVSection = ({ t }) => {
  if (!t) return null;

  return (
    <section id="cv" className="section cv-section animate-fade-in">
      <div className="cv-card card">
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <FileText size={32} style={{ color: 'var(--primary)' }} />
          <span>{t.title}</span>
        </h2>
        <p className="cv-desc">
          {t.desc}
        </p>
        <div className="cv-buttons">
          <a 
            href={links.cvTr} 
            download="Ahmet_Akdeniz_CV_TR.pdf" 
            className="btn btn-primary"
            style={{ minWidth: '200px' }}
          >
            <Download size={18} />
            <span>{t.btnTr}</span>
          </a>
          <a 
            href={links.cvEn} 
            download="Ahmet_Akdeniz_CV_EN.pdf" 
            className="btn btn-secondary"
            style={{ minWidth: '200px' }}
          >
            <Download size={18} />
            <span>{t.btnEn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
