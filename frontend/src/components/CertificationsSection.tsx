'use client';

import React from 'react';
import { Award, Trophy, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { Certification } from '../types/portfolio';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section className="section" id="certifications" style={{ background: 'rgba(9, 12, 19, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-accent">Achievements</span>
          </h2>
          <p className="section-desc">
            Competitive programming benchmarks, hackathon podium finishes, and industry recognized certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
          className="certs-grid"
        >
          {certifications.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Badge & Issuer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: item.category === 'Certification' ? 'rgba(99, 102, 241, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.category === 'Certification' ? (
                    <Award size={22} color="#818cf8" />
                  ) : (
                    <Trophy size={22} color="#fbbf24" />
                  )}
                </div>

                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    background: item.category === 'Certification' ? 'rgba(99, 102, 241, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                    color: item.category === 'Certification' ? '#a5b4fc' : '#fbbf24',
                    border: `1px solid ${item.category === 'Certification' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#06b6d4', fontWeight: 600, marginBottom: '0.8rem' }}>
                {item.issuer} • <span style={{ color: '#94a3b8' }}>{item.date}</span>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                {item.description}
              </p>

              {/* Verification link */}
              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#818cf8',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.certs-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          :global(.certs-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
