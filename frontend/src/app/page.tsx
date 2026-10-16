'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AiAssistantWidget from '../components/AiAssistantWidget';

import {
  fetchProfile,
  fetchProjects,
  fetchSkills,
  fetchExperience,
  fetchCertifications,
  fetchStats,
} from '../lib/api';

import {
  fallbackProfile,
  fallbackProjects,
  fallbackSkillCategories,
  fallbackExperiences,
  fallbackCertifications,
  fallbackStats,
} from '../data/fallbackData';

import { Profile, Project, SkillCategory, Experience, Certification, Stats } from '../types/portfolio';

export default function Home() {
  const [profile, setProfile] = useState<Profile>(fallbackProfile);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [skills, setSkills] = useState<SkillCategory[]>(fallbackSkillCategories);
  const [experience, setExperience] = useState<Experience[]>(fallbackExperiences);
  const [certifications, setCertifications] = useState<Certification[]>(fallbackCertifications);
  const [stats, setStats] = useState<Stats>(fallbackStats);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialQuery, setChatInitialQuery] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Asynchronously synchronize with live Spring Boot backend
    Promise.allSettled([
      fetchProfile().then(setProfile),
      fetchProjects().then(setProjects),
      fetchSkills().then(setSkills),
      fetchExperience().then(setExperience),
      fetchCertifications().then(setCertifications),
      fetchStats().then(setStats),
    ]);
  }, []);

  const handleAskAboutProject = (projectName: string) => {
    setChatInitialQuery(`Tell me about ${projectName} and its architecture`);
    setIsChatOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar onOpenChat={() => { setChatInitialQuery(undefined); setIsChatOpen(true); }} />

      <Hero
        profile={profile}
        stats={stats}
        onOpenChat={() => { setChatInitialQuery(undefined); setIsChatOpen(true); }}
      />

      <ProjectsSection
        projects={projects}
        onAskAboutProject={handleAskAboutProject}
      />

      <ArchitectureDiagram />

      <SkillsSection categories={skills} />

      <ExperienceSection experiences={experience} />

      <CertificationsSection certifications={certifications} />

      <ContactSection profile={profile} />

      <Footer profile={profile} />

      <AiAssistantWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={() => { setChatInitialQuery(undefined); setIsChatOpen(true); }}
        initialQuery={chatInitialQuery}
      />
    </main>
  );
}
