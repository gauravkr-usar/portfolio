'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Database, Shield, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Profile, Stats } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
  stats: Stats;
  onOpenChat: () => void;
}

export default function Hero({ profile, stats, onOpenChat }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'rag' | 'microservice' | 'nextjs'>('rag');
  const [copied, setCopied] = useState(false);

  const snippets = {
    rag: `// Spring AI + pgvector RAG Pipeline (QueryDocs AI)
@Service
public class DocumentIntelligenceService {
    private final VectorStore vectorStore;
    private final ChatClient chatClient;

    public ChatResponse queryDocument(String userPrompt, UUID docId) {
        // 1. Cosine similarity query on HNSW index
        List<Document> relevantChunks = vectorStore.similaritySearch(
            SearchRequest.query(userPrompt)
                .withTopK(5)
                .withSimilarityThreshold(0.78)
                .withFilterExpression("documentId == '" + docId + "'")
        );

        // 2. Multi-Model LLM Reasoning with Source Citations
        return chatClient.prompt()
            .system("Synthesize answers strictly citing chunk similarity IDs.")
            .user(userPrompt)
            .advisors(new QuestionAnswerAdvisor(vectorStore))
            .call()
            .chatResponse();
    }
}`,
    microservice: `// SWVAS - OWASP ZAP Scanning Service (Dr. Ashish Joshi)
@Service
public class SecurityScanOrchestrator {
    private final ZapClient zapClient;
    private final TargetRepository targetRepository;

    @Async
    public CompletableFuture<ScanReport> executeAutomatedScan(UUID targetId) {
        Target target = targetRepository.findById(targetId).orElseThrow();
        
        // Trigger automated OWASP ZAP active & passive scan
        String scanId = zapClient.ascan().scan(target.getUrl(), "True", "False", null, null, null);
        pollScanCompletion(scanId);
        
        // Process alerts, classify CWE severity & persist to PostgreSQL
        List<Alert> alerts = zapClient.core().alerts(target.getUrl(), null, null);
        return CompletableFuture.completedFuture(reportService.generate(alerts));
    }
}`,
    nextjs: `// Next.js 15 App Router + Spring Boot Integration
export async function getPortfolioData() {
  const [profile, projects] = await Promise.all([
    fetch("http://localhost:8085/api/profile", { next: { revalidate: 60 } }),
    fetch("http://localhost:8085/api/projects?featured=true")
  ]);

  return {
    profile: await profile.json(),
    featuredProjects: await projects.json(),
    hydratedAt: new Date().toISOString()
  };
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" id="about" style={{ paddingTop: '8.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          {/* Left Column: Bio & Call to Actions */}
          <div>
            {/* Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#6ee7b7',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
              }}
            >
              <span className="pulse-dot" />
              <span>Available for Full-Stack & GenAI Roles • USAR GGSIPU</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: '3.6rem',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.2rem',
              }}
              className="hero-title"
            >
              Engineering Scalable <br />
              <span className="gradient-accent">Java, Spring Boot</span> <br />
              & <span className="gradient-text">Applied GenAI</span> Systems
            </h1>

            {/* Subtitle / Pitch */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '620px',
              }}
            >
              Hi, I&apos;m <strong style={{ color: '#fff' }}>Gaurav Kumar</strong>. Final-year B.Tech AI/ML student at
              USAR (GGSIPU), Delhi. I architect enterprise-grade microservices with <strong>Spring Boot 3</strong>,
              build production RAG pipelines with <strong>Spring AI & pgvector</strong>, and craft modern high-speed frontends with <strong>React 19 & Next.js</strong>.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              <button onClick={onOpenChat} className="btn btn-accent">
                <Sparkles size={17} />
                <span>Talk to Portfolio AI</span>
              </button>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={17} />
                <span>GitHub Repos</span>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  background: 'rgba(10, 102, 194, 0.12)',
                  borderColor: 'rgba(10, 102, 194, 0.3)',
                  color: '#38bdf8',
                }}
              >
                <LinkedinIcon size={17} color="#38bdf8" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Impact Metric Chips */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              className="metric-grid"
            >
              <a
                href={profile.leetcodeUrl || "https://leetcode.com/u/gaurav_usar/"}
                target="_blank"
                rel="noopener noreferrer"
                title="View LeetCode Profile: gaurav_usar"
                style={{ ...metricCardStyle, textDecoration: 'none', transition: 'all 0.2s', display: 'block' }}
              >
                <div style={metricNumberStyle}>500+</div>
                <div style={metricLabelStyle}>DSA Problems ↗</div>
              </a>

              <a
                href={profile.leetcodeUrl || "https://leetcode.com/u/gaurav_usar/"}
                target="_blank"
                rel="noopener noreferrer"
                title="View LeetCode Rating: 1580+"
                style={{ ...metricCardStyle, textDecoration: 'none', transition: 'all 0.2s', display: 'block' }}
              >
                <div style={metricNumberStyle}>1580+</div>
                <div style={metricLabelStyle}>LeetCode Rating ↗</div>
              </a>

              <div style={metricCardStyle}>
                <div style={metricNumberStyle}>13+</div>
                <div style={metricLabelStyle}>GitHub Repos</div>
              </div>

              <div style={metricCardStyle}>
                <div style={metricNumberStyle}>5-Star</div>
                <div style={metricLabelStyle}>HackerRank Java</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal */}
          <div className="float-element">
            <div className="terminal-window">
              {/* Window Bar */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot dot-red" />
                  <div className="terminal-dot dot-yellow" />
                  <div className="terminal-dot dot-green" />
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => setActiveTab('rag')}
                    style={getTabStyle(activeTab === 'rag')}
                  >
                    QueryDocsRAG.java
                  </button>
                  <button
                    onClick={() => setActiveTab('microservice')}
                    style={getTabStyle(activeTab === 'microservice')}
                  >
                    SecurityMesh.java
                  </button>
                  <button
                    onClick={() => setActiveTab('nextjs')}
                    style={getTabStyle(activeTab === 'nextjs')}
                  >
                    Next15.ts
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  title="Copy snippet"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copied ? '#10b981' : '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Body */}
              <div className="terminal-body" style={{ maxHeight: '420px', fontSize: '0.82rem' }}>
                <pre style={{ margin: 0, fontFamily: 'var(--font-mono)' }}>
                  <code>{snippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '0.75rem',
                  color: '#64748b',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981' }}>●</span>
                  <span>Java 21 • Spring Boot 3.3.4 • pgvector HNSW</span>
                </div>
                <span>UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          :global(.hero-title) {
            font-size: 2.6rem !important;
          }
          :global(.metric-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

const metricCardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.06)',
  borderRadius: '12px',
  padding: '0.8rem 1rem',
};

const metricNumberStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  fontWeight: 800,
  color: '#f8fafc',
  fontFamily: 'var(--font-mono)',
};

const metricLabelStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  marginTop: '0.2rem',
};

function getTabStyle(active: boolean): React.CSSProperties {
  return {
    background: active ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
    border: `1px solid ${active ? 'rgba(99, 102, 241, 0.4)' : 'transparent'}`,
    borderRadius: '6px',
    color: active ? '#a5b4fc' : '#94a3b8',
    padding: '0.25rem 0.65rem',
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };
}
