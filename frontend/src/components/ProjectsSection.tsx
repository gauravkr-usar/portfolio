'use client';

import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, CheckCircle2, Filter } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
  onAskAboutProject: (projectName: string) => void;
}

export default function ProjectsSection({ projects, onAskAboutProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'GenAI & RAG', 'Spring Boot & Microservices', 'Full-Stack Web'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Production & <span className="gradient-accent">Research Systems</span>
          </h2>
          <p className="section-desc">
            End-to-end full-stack architectures, conversational vector RAG pipelines, and automated security platforms.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${activeCategory === cat ? '#6366f1' : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: '9999px',
                padding: '0.5rem 1.2rem',
                color: activeCategory === cat ? '#fff' : '#94a3b8',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
                <span
                  className={`status-badge ${
                    project.category.includes('RAG') ? 'status-purple' :
                    project.category.includes('Microservices') ? 'status-cyan' : 'status-green'
                  }`}
                >
                  {project.status}
                </span>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      style={iconLinkStyle}
                    >
                      <GithubIcon size={17} />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Application"
                      style={iconLinkStyle}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#818cf8', fontWeight: 600, marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                {project.subtitle}
              </p>

              {/* Description */}
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {project.description}
              </p>

              {/* Key Architectural Bullets */}
              <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                  Architecture Highlights
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {project.bulletPoints.map((point, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <span style={{ color: '#06b6d4', marginTop: '0.15rem', flexShrink: 0 }}>▹</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  marginTop: 'auto',
                }}
              >
                <button
                  onClick={() => onAskAboutProject(project.title)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#a5b4fc',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.2rem 0',
                  }}
                >
                  <Sparkles size={14} color="#818cf8" />
                  <span>Ask AI Assistant</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#06b6d4',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span>View Source</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.projects-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const iconLinkStyle: React.CSSProperties = {
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#cbd5e1',
  textDecoration: 'none',
  transition: 'all 0.2s',
};
