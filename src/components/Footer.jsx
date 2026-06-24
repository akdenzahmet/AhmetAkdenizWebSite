import React from 'react';
import { Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import links from '../data/links';

const Footer = ({ t }) => {
  if (!t) return null;
  const f = t.footer;
  const n = t.nav;
  const cv = t.cv;
  const c = t.contact;

  return (
    <footer className="footer" style={{ padding: '60px 24px 40px' }}>
      <div className="footer-container" style={{ flexDirection: 'column', gap: '40px', alignItems: 'stretch' }}>
        {/* Top Section: Links Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'left' }}>
          {/* Col 1: Brand */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '16px' }}>
              Ahmet Akdeniz<span className="logo-dot">.</span>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              {f.brandDesc}
            </p>
          </div>
          
          {/* Col 2: Nav */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {f.navTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href="#home" className="nav-link">{n.home}</a>
              <a href="#about" className="nav-link">{n.about}</a>
              <a href="#projects" className="nav-link">{n.projects}</a>
              <a href="#services" className="nav-link">{n.services}</a>
              <a href="#process" className="nav-link">{n.process}</a>
            </div>
          </div>
          
          {/* Col 3: CV Download */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {f.cvTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href={links.cvTr} download="Ahmet_Akdeniz_CV_TR.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} className="nav-link">
                <Download size={14} />
                <span>{cv.btnTr}</span>
              </a>
              <a href={links.cvEn} download="Ahmet_Akdeniz_CV_EN.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} className="nav-link">
                <Download size={14} />
                <span>{cv.btnEn}</span>
              </a>
            </div>
          </div>
          
          {/* Col 4: Contact */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {f.contactTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <p>{links.email}</p>
              <p>{c.location}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border)' }}></div>

        {/* Bottom Section: Copyright & Socials */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p className="footer-text" style={{ fontSize: '0.85rem', margin: '0' }}>
            © {new Date().getFullYear()} Ahmet Akdeniz. {f.copyright}
          </p>
          <div className="footer-socials">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${links.email}`} className="btn-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
