'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, MessageSquareCode, Sparkles, ExternalLink, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { checkBackendHealth } from '../lib/api';

interface NavbarProps {
  onOpenChat: () => void;
}

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#fff',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
            }}
          >
            GK
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
              Gaurav Kumar
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              Java • Spring Boot • RAG
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
          }}
          className="desktop-nav"
        >
          <a href="#about" style={navLinkStyle}>About</a>
          <a href="#projects" style={navLinkStyle}>Projects</a>
          <a href="#architecture" style={navLinkStyle}>Architecture</a>
          <a href="#skills" style={navLinkStyle}>Skills</a>
          <a href="#experience" style={navLinkStyle}>Experience</a>
          <a href="#certifications" style={navLinkStyle}>Achievements</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </div>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          {/* AI Assistant Button */}
          <button
            onClick={onOpenChat}
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 0.9rem',
              fontSize: '0.85rem',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              background: 'rgba(99, 102, 241, 0.15)',
              color: '#c7d2fe',
            }}
          >
            <Sparkles size={15} color="#818cf8" />
            <span>Ask AI</span>
          </button>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/gauravk001/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn: gauravk001"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(10, 102, 194, 0.15)',
              border: '1px solid rgba(10, 102, 194, 0.35)',
              color: '#38bdf8',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <LinkedinIcon size={18} color="#38bdf8" />
          </a>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/gauravkr-usar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub: gauravkr-usar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            <GithubIcon size={18} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '0.3rem',
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(9, 12, 19, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Projects</a>
          <a href="#architecture" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Architecture</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Skills</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Experience</a>
          <a href="#certifications" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Achievements</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Contact</a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-toggle) {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}

const navLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#94a3b8',
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'color 0.2s ease',
};

const mobileNavLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#e2e8f0',
  fontSize: '1.05rem',
  fontWeight: 600,
  padding: '0.5rem 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
};
