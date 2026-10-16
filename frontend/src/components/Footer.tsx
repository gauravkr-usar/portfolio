'use client';

import React from 'react';
import { Code2, ArrowUp, Heart, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodolioIcon } from './Icons';
import { Profile } from '../types/portfolio';

interface FooterProps {
  profile: Profile;
}

export default function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#05070a',
        padding: '4rem 0 2rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: '#fff',
                }}
              >
                GK
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                Gaurav Kumar
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Full-Stack Developer & AI Systems Engineer. Final-year B.Tech AI/ML student at USAR (GGSIPU), Delhi.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={footerIconBtnStyle}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={footerIconBtnStyle}
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={profile.leetcodeUrl || "https://leetcode.com/u/gaurav_usar/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              title="LeetCode: gaurav_usar"
              style={footerIconBtnStyle}
            >
              <LeetCodeIcon size={18} />
            </a>

            <a
              href={profile.codolioUrl || "https://codolio.com/profile/gaurav_usar"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codolio Profile"
              title="Codolio: gaurav_usar"
              style={footerIconBtnStyle}
            >
              <CodolioIcon size={18} />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                ...footerIconBtnStyle,
                background: 'rgba(99, 102, 241, 0.2)',
                border: '1px solid rgba(99, 102, 241, 0.4)',
                color: '#a5b4fc',
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            © 2026 Gaurav Kumar. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            <span>Next.js 15 App Router</span>
            <span>•</span>
            <span>React 19</span>
            <span>•</span>
            <span>Spring Boot 3 (Java 21)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerIconBtnStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#cbd5e1',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.2s',
};
