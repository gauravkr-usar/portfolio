'use client';

import React, { useState } from 'react';
import { Layers, Database, Cpu, ShieldCheck, ArrowRight, Server, FileText, CheckCircle2, Terminal } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [selectedArch, setSelectedArch] = useState<'rag' | 'swvas'>('rag');

  return (
    <section className="section" id="architecture" style={{ background: 'rgba(9, 12, 19, 0.5)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Systems Engineering</span>
          </div>
          <h2 className="section-title">
            Architectural <span className="gradient-accent">Deep Dives</span>
          </h2>
          <p className="section-desc">
            Production-grade distributed pipelines engineered with microservice modularity, vector embeddings, and rigorous security.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <button
            onClick={() => setSelectedArch('rag')}
            className="btn"
            style={{
              background: selectedArch === 'rag' ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${selectedArch === 'rag' ? '#6366f1' : 'rgba(255, 255, 255, 0.1)'}`,
              color: '#fff',
              padding: '0.65rem 1.4rem',
            }}
          >
            <Cpu size={16} />
            <span>QueryDocs AI (Conversational RAG)</span>
          </button>

          <button
            onClick={() => setSelectedArch('swvas')}
            className="btn"
            style={{
              background: selectedArch === 'swvas' ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${selectedArch === 'swvas' ? '#06b6d4' : 'rgba(255, 255, 255, 0.1)'}`,
              color: '#fff',
              padding: '0.65rem 1.4rem',
            }}
          >
            <ShieldCheck size={16} />
            <span>SWVAS Microservices (OWASP ZAP)</span>
          </button>
        </div>

        {/* Architecture Content */}
        {selectedArch === 'rag' ? (
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <span className="status-badge status-purple" style={{ marginBottom: '0.5rem' }}>
                  Spring AI + pgvector Architecture
                </span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>
                  QueryDocs AI: End-to-End Semantic Ingestion & RAG Loop
                </h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="tech-pill">Java 21</span>
                <span className="tech-pill">Spring AI</span>
                <span className="tech-pill">PostgreSQL pgvector</span>
                <span className="tech-pill">Groq Llama 3.3</span>
              </div>
            </div>

            {/* Architecture Steps Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.25rem',
                position: 'relative',
              }}
              className="arch-flow-grid"
            >
              {/* Step 1 */}
              <div style={archBoxStyle}>
                <div style={stepNumStyle}>01</div>
                <div style={archIconBoxStyle}>
                  <FileText size={20} color="#818cf8" />
                </div>
                <h4 style={archStepTitleStyle}>Document Ingestion</h4>
                <p style={archStepDescStyle}>
                  Multi-format ingestion (PDF, DOCX, TXT). Text extraction and token-aware semantic chunking with overlapping sliding windows.
                </p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span className="tech-pill" style={{ fontSize: '0.72rem' }}>Spring Tika Parser</span>
                </div>
              </div>

              {/* Step 2 */}
              <div style={archBoxStyle}>
                <div style={stepNumStyle}>02</div>
                <div style={archIconBoxStyle}>
                  <Database size={20} color="#06b6d4" />
                </div>
                <h4 style={archStepTitleStyle}>HNSW Vector Store</h4>
                <p style={archStepDescStyle}>
                  Spring AI generates high-dimensional embeddings. Stored in PostgreSQL with pgvector HNSW indexing using cosine distance.
                </p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span className="tech-pill" style={{ fontSize: '0.72rem' }}>pgvector HNSW</span>
                </div>
              </div>

              {/* Step 3 */}
              <div style={archBoxStyle}>
                <div style={stepNumStyle}>03</div>
                <div style={archIconBoxStyle}>
                  <Layers size={20} color="#a855f7" />
                </div>
                <h4 style={archStepTitleStyle}>Similarity Retrieval</h4>
                <p style={archStepDescStyle}>
                  Top-K cosine similarity search with per-user document isolation filters and dynamic relevance score thresholding.
                </p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span className="tech-pill" style={{ fontSize: '0.72rem' }}>Cosine Distance</span>
                </div>
              </div>

              {/* Step 4 */}
              <div style={archBoxStyle}>
                <div style={stepNumStyle}>04</div>
                <div style={archIconBoxStyle}>
                  <Cpu size={20} color="#10b981" />
                </div>
                <h4 style={archStepTitleStyle}>Multi-LLM Synthesis</h4>
                <p style={archStepDescStyle}>
                  Context-augmented generation routed to Groq Llama 3.3, GPT-4o, or Gemini with source citations and conversation history.
                </p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span className="tech-pill" style={{ fontSize: '0.72rem' }}>Groq / GPT-4o / Gemini</span>
                </div>
              </div>
            </div>

            {/* Architectural Highlights */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
              className="arch-details-grid"
            >
              <div style={detailBoxStyle}>
                <div style={{ fontWeight: 700, color: '#a5b4fc', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} />
                  <span>HNSW Sub-Linear Querying</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  HNSW graph indexing allows lightning-fast approximate nearest neighbor lookup even over millions of document vectors.
                </p>
              </div>

              <div style={detailBoxStyle}>
                <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} />
                  <span>Per-User Security Isolation</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Spring Security JWT filters enforce strict tenant boundaries so queries never leak data across authenticated users.
                </p>
              </div>

              <div style={detailBoxStyle}>
                <div style={{ fontWeight: 700, color: '#34d399', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} />
                  <span>Fact & Clause Extraction</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Provides chunk-level similarity scores and precise page citations to eradicate hallucination in legal and technical docs.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <span className="status-badge status-cyan" style={{ marginBottom: '0.5rem' }}>
                  Academic Research • Under Dr. Ashish Joshi (USAR GGSIPU)
                </span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>
                  SWVAS: Microservices Vulnerability Scanning & Orchestration
                </h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="tech-pill">Java 21</span>
                <span className="tech-pill">Spring Cloud Eureka</span>
                <span className="tech-pill">API Gateway</span>
                <span className="tech-pill">OWASP ZAP</span>
              </div>
            </div>

            {/* Architecture Steps Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.25rem',
              }}
              className="arch-flow-grid"
            >
              {/* Step 1 */}
              <div style={archBoxStyle}>
                <div style={stepNumStyle}>01</div>
                <div style={archIconBoxStyle}>
                  <Server size={20} color="#06b6d4" />
                </div>
                <h4 style={archStepTitleStyle}>API Gateway & Eureka</h4>
                <p style={archStepDescStyle}>
                  Centralized traffic ingress via Spring Cloud Gateway. Dynamic discovery using Eureka and JWT auth validation.
                </p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span className="tech-pill" style={{ fontSize: '0.72rem' }}>Eureka Mesh</span>
                </div>
              </div>

              {/* Step 2 */}
              <div style={archBoxStyle}>
                <div style={stepNumStyle}>02</div>
                <div style={archIconBoxStyle}>
                  <Terminal size={20} color="#818cf8" />
                </div>
                <h4 style={archStepTitleStyle}>Scan Orchestration</h4>
                <p style={archStepDescStyle}>
                  Service for target registration, scan queuing, manual triggers, cron schedules, and CI/CD webhook dispatching.
                </p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span className="tech-pill" style={{ fontSize: '0.72rem' }}>Async Dispatcher</span>
                </div>
              </div>

              {/* Step 3 */}
              <div style={archBoxStyle}>
                <div style={stepNumStyle}>03</div>
                <div style={archIconBoxStyle}>
                  <ShieldCheck size={20} color="#ef4444" />
                </div>
                <h4 style={archStepTitleStyle}>OWASP ZAP Engine</h4>
                <p style={archStepDescStyle}>
                  Headless OWASP ZAP container executing passive and active vulnerability probing against registered targets.
                </p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span className="tech-pill" style={{ fontSize: '0.72rem' }}>ZAP Automation API</span>
                </div>
              </div>

              {/* Step 4 */}
              <div style={archBoxStyle}>
                <div style={stepNumStyle}>04</div>
                <div style={archIconBoxStyle}>
                  <FileText size={20} color="#10b981" />
                </div>
                <h4 style={archStepTitleStyle}>Analysis & Reporting</h4>
                <p style={archStepDescStyle}>
                  Alert normalization, CWE risk severity aggregation, PostgreSQL audit persistence, and automated executive PDF reports.
                </p>
                <div style={{ marginTop: '0.8rem' }}>
                  <span className="tech-pill" style={{ fontSize: '0.72rem' }}>PostgreSQL & PDF</span>
                </div>
              </div>
            </div>

            {/* Architectural Highlights */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
              className="arch-details-grid"
            >
              <div style={detailBoxStyle}>
                <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} />
                  <span>Decoupled Microservice Workers</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Heavy scanning runs in background worker nodes without blocking web requests or API Gateway performance.
                </p>
              </div>

              <div style={detailBoxStyle}>
                <div style={{ fontWeight: 700, color: '#f87171', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} />
                  <span>OWASP Top 10 Coverage</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Automates detection of SQL injection, cross-site scripting (XSS), insecure deserialization, and CORS flaws.
                </p>
              </div>

              <div style={detailBoxStyle}>
                <div style={{ fontWeight: 700, color: '#34d399', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} />
                  <span>Dockerized Deployment Mesh</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Complete multi-container orchestration with Docker Compose connecting PostgreSQL, Eureka, Gateway, and ZAP daemon.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.arch-flow-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          :global(.arch-details-grid) {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          :global(.arch-flow-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const archBoxStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.07)',
  borderRadius: '16px',
  padding: '1.5rem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
};

const stepNumStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1rem',
  right: '1.2rem',
  fontSize: '1.5rem',
  fontWeight: 800,
  color: 'rgba(255, 255, 255, 0.1)',
  fontFamily: 'var(--font-mono)',
};

const archIconBoxStyle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
};

const archStepTitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 700,
  color: '#f8fafc',
  marginBottom: '0.5rem',
};

const archStepDescStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: '#94a3b8',
  lineHeight: 1.6,
  flex: 1,
};

const detailBoxStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.02)',
  padding: '1rem 1.25rem',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.04)',
};
