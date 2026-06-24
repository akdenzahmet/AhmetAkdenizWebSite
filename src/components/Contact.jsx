import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import links from '../data/links';

const Contact = ({ t }) => {
  if (!t) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const triggerMailto = (name, email, message) => {
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(
      `${t.labelName}: ${name}\n${t.labelEmail}: ${email}\n\n${t.labelMessage}:\n${message}`
    );
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    setIsSubmitting(true);

    // Formspree ID control
    const hasFormspreeId = links.formspreeId && 
      links.formspreeId !== 'BURAYA_FORMSPREE_ID_GELECEK' && 
      links.formspreeId.trim() !== '';

    if (hasFormspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${links.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message
          })
        });

        if (response.ok) {
          alert(t.alertSuccess);
          setFormData({ name: '', email: '', message: '' });
        } else {
          // If Formspree returns error, trigger mailto fallback
          alert(t.alertRedirect);
          triggerMailto(name, email, message);
        }
      } catch (error) {
        // If network error, trigger mailto fallback
        alert(t.alertConnError);
        triggerMailto(name, email, message);
      }
    } else {
      // Default fallback if no Formspree ID is set
      triggerMailto(name, email, message);
      alert(t.alertMailto);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section animate-fade-in">
      <h2 className="section-title">{t.title}</h2>
      <p className="section-subtitle">{t.subtitle}</p>

      <div className="contact-grid">
        {/* Left Side: Contact Info */}
        <div className="contact-card card">
          <div>
            <h3>{t.infoTitle}</h3>
            <p style={{ marginBottom: '24px' }}>{t.infoDesc}</p>
            
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <h4>{t.labelEmailHeader}</h4>
                  <p>
                    <a href={`mailto:${links.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                      {links.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-details">
                  <h4>{t.labelLocationHeader}</h4>
                  <p>{t.location}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Linkedin size={20} />
                </div>
                <div className="contact-details">
                  <h4>LINKEDIN</h4>
                  <p>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      {links.linkedin.replace('https://', '')}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Github size={20} />
                </div>
                <div className="contact-details">
                  <h4>GITHUB</h4>
                  <p>
                    <a href={links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      {links.github.replace('https://', '')}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: mock Email Form */}
        <div className="card">
          <form onSubmit={handleSubmit} className="contact-form-container">
            <div className="form-group">
              <label htmlFor="name">{t.labelName}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="form-control" 
                placeholder={t.placeholderName} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.labelEmail}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="form-control" 
                placeholder={t.placeholderEmail} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.labelMessage}</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                className="form-control" 
                placeholder={t.placeholderMessage} 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              disabled={isSubmitting}
            >
              <Send size={18} />
              <span>{isSubmitting ? t.btnSending : t.btnSend}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
