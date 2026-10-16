'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, RefreshCw, MessageSquare, ExternalLink } from 'lucide-react';
import { ChatMessage } from '../types/portfolio';
import { sendChatMessage } from '../lib/api';

interface AiAssistantWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  initialQuery?: string;
}

export default function AiAssistantWidget({ isOpen, onClose, onOpen, initialQuery }: AiAssistantWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "### Hi there! 👋\nI am **Gaurav Kumar's Portfolio AI Agent**, running on **Java 21 & Spring Boot 3**.\n\nAsk me anything about his:\n- **QueryDocs AI** (RAG platform with Spring AI & pgvector)\n- **SWVAS** microservices with OWASP ZAP (under Dr. Ashish Joshi)\n- **500+ LeetCode DSA problems** & HackerRank ratings\n- **How to hire or contact** Gaurav",
      suggestions: [
        "Tell me about QueryDocs AI",
        "What is SWVAS with OWASP ZAP?",
        "What are Gaurav's Java skills?",
        "How can I contact Gaurav?"
      ],
      timestamp: 1729000000000
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuery && isOpen) {
      handleSend(initialQuery);
    }
  }, [initialQuery, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      const res = await sendChatMessage(text, history);

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: res.response || "I couldn't process that. Feel free to ask about Gaurav's Spring Boot or RAG projects!",
        suggestions: res.suggestions,
        relevantProjects: res.relevantProjects,
        timestamp: res.timestamp || Date.now()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content: "Sorry, I had trouble reaching the Spring Boot AI service. You can explore Gaurav's projects on GitHub: [gauravkr-usar](https://github.com/gauravkr-usar).",
          timestamp: Date.now()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const formatMarkdown = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Header 3
      if (line.startsWith('### ')) {
        return (
          <h4 key={i} style={{ fontSize: '1rem', fontWeight: 700, margin: '0.6rem 0 0.3rem 0', color: '#c7d2fe' }}>
            {renderInline(line.replace('### ', ''))}
          </h4>
        );
      }
      // Bullet list
      if (line.startsWith('- ')) {
        return (
          <div key={i} style={{ display: 'flex', gap: '0.4rem', margin: '0.2rem 0', paddingLeft: '0.4rem' }}>
            <span style={{ color: '#06b6d4' }}>•</span>
            <span>{renderInline(line.replace('- ', ''))}</span>
          </div>
        );
      }
      // Numbered list
      if (/^\d+\.\s/.test(line)) {
        return (
          <div key={i} style={{ margin: '0.25rem 0', paddingLeft: '0.4rem' }}>
            {renderInline(line)}
          </div>
        );
      }
      if (line.trim() === '') {
        return <div key={i} style={{ height: '0.4rem' }} />;
      }
      return <p key={i} style={{ margin: '0.2rem 0' }}>{renderInline(line)}</p>;
    });
  };

  const renderInline = (str: string) => {
    // Basic bold and link replacement
    const parts = [];
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.substring(lastIndex, match.index));
      }

      const matchText = match[0];
      if (matchText.startsWith('**') && matchText.endsWith('**')) {
        parts.push(<strong key={match.index} style={{ color: '#fff' }}>{matchText.slice(2, -2)}</strong>);
      } else if (matchText.startsWith('[')) {
        const linkMatch = matchText.match(/\[(.*?)\]\((.*?)\)/);
        if (linkMatch) {
          parts.push(
            <a
              key={match.index}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#38bdf8', textDecoration: 'underline' }}
            >
              {linkMatch[1]}
            </a>
          );
        }
      }

      lastIndex = match.index + matchText.length;
    }

    if (lastIndex < str.length) {
      parts.push(str.substring(lastIndex));
    }

    return parts.length > 0 ? parts : str;
  };

  return (
    <>
      {/* Floating launcher trigger */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="Open AI Assistant"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 90,
            padding: '0.85rem 1.4rem',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            color: '#fff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(99, 102, 241, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="float-element"
        >
          <Sparkles size={18} />
          <span>Ask Portfolio AI</span>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
            }}
          />
        </button>
      )}

      {/* Slide-in Drawer Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '420px',
            maxWidth: 'calc(100vw - 2rem)',
            height: '620px',
            maxHeight: 'calc(100vh - 4rem)',
            zIndex: 1000,
            background: '#0d111a',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(99, 102, 241, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Drawer Header */}
          <div
            style={{
              padding: '1.1rem 1.25rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                  Gaurav&apos;s Portfolio AI
                </div>
                <div style={{ fontSize: '0.72rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                  <span>Powered by Spring Boot 3</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                onClick={() => setMessages([messages[0]])}
                title="Reset Chat"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '0.3rem',
                }}
              >
                <RefreshCw size={15} />
              </button>
              <button
                onClick={onClose}
                title="Close Drawer"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '0.3rem',
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div
            style={{
              flex: 1,
              padding: '1.25rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: m.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '88%',
                    padding: '0.85rem 1.1rem',
                    borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: m.role === 'user'
                      ? 'linear-gradient(135deg, #6366f1, #4f46e5)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: m.role === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: m.role === 'user' ? '#fff' : '#e2e8f0',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {formatMarkdown(m.content)}
                </div>

                {/* Suggestions Pills */}
                {m.suggestions && m.suggestions.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.6rem' }}>
                    {m.suggestions.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSend(sug)}
                        style={{
                          background: 'rgba(99, 102, 241, 0.12)',
                          border: '1px solid rgba(99, 102, 241, 0.3)',
                          borderRadius: '9999px',
                          padding: '0.25rem 0.65rem',
                          fontSize: '0.75rem',
                          color: '#c7d2fe',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.82rem' }}>
                <span className="pulse-dot" />
                <span>Gaurav&apos;s AI Assistant is analyzing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div
            style={{
              padding: '0.9rem 1.1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              gap: '0.6rem',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Spring Boot, RAG, SWVAS..."
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '0.65rem 0.9rem',
                color: '#fff',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: input.trim() ? 'linear-gradient(135deg, #6366f1, #06b6d4)' : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: input.trim() ? 'pointer' : 'default',
                opacity: input.trim() ? 1 : 0.5,
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
