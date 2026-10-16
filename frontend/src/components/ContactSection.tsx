'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodolioIcon } from './Icons';
import { Profile } from '../types/portfolio';
import { submitContact } from '../lib/api';

interface ContactSectionProps {
  profile: Profile;
}

export default function ContactSection({ profile }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseState, setResponseState] = useState<{
    success?: boolean;
    message?: string;
    referenceId?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setLoading(true);
    setResponseState(null);

    const res = await submitContact(formData);
    setLoading(false);

    if (res.ok && res.data) {
      setResponseState({
        success: true,
        message: res.data.message || 'Your inquiry has been successfully transmitted.',
        referenceId: res.data.referenceId || 'MSG-REC-2026',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setResponseState({
        success: false,
        message: 'Could not deliver message to server. Please email directly at gaurav852799@gmail.com.',
      });
    }
  };

  return (
    <section className="section" id="contact" style={{ background: 'rgba(7, 9, 14, 0.7)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-accent">Touch</span>
          </h2>
          <p className="section-desc">
            Open for full-time Full-Stack Engineer, Java/Spring Boot Developer, and GenAI Engineering roles.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3rem' }} className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.6rem' }}>
                Contact Information
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Feel free to reach out directly via email, phone, or connect through LinkedIn and GitHub.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  style={contactItemStyle}
                >
                  <div style={contactIconStyle}>
                    <Mail size={18} color="#818cf8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Email</div>
                    <div style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 600 }}>{profile.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                  style={contactItemStyle}
                >
                  <div style={contactIconStyle}>
                    <Phone size={18} color="#06b6d4" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Phone / WhatsApp</div>
                    <div style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 600 }}>{profile.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div style={contactItemStyle}>
                  <div style={contactIconStyle}>
                    <MapPin size={18} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Location</div>
                    <div style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 600 }}>{profile.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.8rem', textTransform: 'uppercase' }}>
                  Professional Channels
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} color="#64748b" />
                  </a>

                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  >
                    <LinkedinIcon size={15} color="#0a66c2" />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={13} color="#64748b" />
                  </a>

                  <a
                    href={profile.leetcodeUrl || "https://leetcode.com/u/gaurav_usar/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  >
                    <LeetCodeIcon size={16} />
                    <span>LeetCode</span>
                    <ArrowUpRight size={13} color="#64748b" />
                  </a>

                  <a
                    href={profile.codolioUrl || "https://codolio.com/profile/gaurav_usar"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  >
                    <CodolioIcon size={16} />
                    <span>Codolio</span>
                    <ArrowUpRight size={13} color="#64748b" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spring Boot Contact Form */}
          <div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#f8fafc' }}>
                    Send Direct Message
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                    <span className="pulse-dot" />
                    <span>Direct Spring Boot REST API Endpoint</span>
                  </div>
                </div>
              </div>

              {responseState && (
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    marginBottom: '1.5rem',
                    background: responseState.success ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                    border: `1px solid ${responseState.success ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                    color: responseState.success ? '#6ee7b7' : '#fca5a5',
                    fontSize: '0.88rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    {responseState.success ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    <span>{responseState.success ? 'Transmission Confirmed' : 'Error'}</span>
                  </div>
                  <div>{responseState.message}</div>
                  {responseState.referenceId && (
                    <div style={{ fontSize: '0.78rem', color: '#a7f3d0', marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      Reference ID: {responseState.referenceId}
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="form-row">
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full-Stack Engineer Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the role or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    padding: '0.9rem',
                    fontSize: '1rem',
                    marginTop: '0.5rem',
                    cursor: loading ? 'wait' : 'pointer',
                  }}
                >
                  <Send size={18} />
                  <span>{loading ? 'Transmitting to Spring Boot Backend...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.contact-grid) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          :global(.form-row) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const contactItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '0.85rem 1rem',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  textDecoration: 'none',
  transition: 'all 0.2s',
};

const contactIconStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.82rem',
  fontWeight: 600,
  color: '#cbd5e1',
  marginBottom: '0.4rem',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  background: 'var(--bg-input)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#fff',
  fontSize: '0.9rem',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
};
