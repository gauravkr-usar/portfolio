export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  codolioUrl: string;
  avatarUrl: string;
  summary: string;
  highlights: Record<string, string>;
  focusAreas: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
  status: string;
  featured: boolean;
  architecturalHighlights: string[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
  level: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  mentor?: string;
  location: string;
  period: string;
  type: string;
  descriptionPoints: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  category: string;
  description: string;
}

export interface Stats {
  dsaCount: number;
  leetcodeRating: number;
  reposCount: number;
  javaStarRating: number;
  sqlStarRating: number;
  cgpa: number;
  primaryTech: string;
  aiSpecialization: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  suggestions?: string[];
  relevantProjects?: string[];
  timestamp: number;
}
