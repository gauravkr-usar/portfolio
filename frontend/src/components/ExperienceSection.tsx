'use client';

import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types/portfolio';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Academic & Engineering Path</span>
          </div>
          <h2 className="section-title">
            Research & <span className="gradient-accent">Experience</span>
          </h2>
          <p className="section-desc">
            Formal engineering education, faculty mentorship, and mission-critical project execution.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp) => (
            <div key={exp.id} className="glass-card" style={{ padding: '2.5rem' }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    {exp.type.includes('Research') ? (
                      <span className="status-badge status-purple">Academic Research</span>
                    ) : (
                      <span className="status-badge status-green">Undergraduate Education</span>
                    )}
                    {exp.mentor && (
                      <span style={{ fontSize: '0.8rem', color: '#67e8f9', fontWeight: 600 }}>
                        Under {exp.mentor}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#f8fafc' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '1.05rem', color: '#a5b4fc', fontWeight: 600, marginTop: '0.2rem' }}>
                    {exp.organization}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }} className="timeline-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#64748b' }}>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: '1.5rem 0' }}>
                {exp.descriptionPoints.map((point, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
                    <span style={{ color: '#06b6d4', marginTop: '0.2rem', flexShrink: 0 }}>▹</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                {exp.technologies.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          :global(.timeline-meta) {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
