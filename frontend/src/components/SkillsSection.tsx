'use client';

import React from 'react';
import { Cpu, Server, Brain, Layout, Database, Shield, Code, Sparkles } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export default function SkillsSection({ categories }: SkillsSectionProps) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'server': return <Server size={22} color="#818cf8" />;
      case 'brain': return <Brain size={22} color="#06b6d4" />;
      case 'layout': return <Layout size={22} color="#34d399" />;
      case 'database': return <Database size={22} color="#f59e0b" />;
      case 'shield': return <Shield size={22} color="#f87171" />;
      default: return <Code size={22} color="#a855f7" />;
    }
  };

  return (
    <section className="section" id="skills" style={{ background: 'rgba(7, 9, 14, 0.6)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-accent">Skill Matrix</span>
          </h2>
          <p className="section-desc">
            Deep focus on Java ecosystem performance, production GenAI vector pipelines, and reactive modern web applications.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
          className="skills-grid"
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}>
                  {cat.category}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e2e8f0' }}>
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '9999px',
                          background: skill.level === 'Advanced' ? 'rgba(99, 102, 241, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                          color: skill.level === 'Advanced' ? '#a5b4fc' : '#67e8f9',
                          fontWeight: 600,
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div
                      style={{
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.proficiency}%`,
                          height: '100%',
                          borderRadius: '9999px',
                          background: idx % 2 === 0
                            ? 'linear-gradient(90deg, #6366f1, #818cf8)'
                            : 'linear-gradient(90deg, #06b6d4, #10b981)',
                          boxShadow: idx % 2 === 0
                            ? '0 0 10px rgba(99, 102, 241, 0.5)'
                            : '0 0 10px rgba(6, 182, 212, 0.5)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.skills-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          :global(.skills-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
