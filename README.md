# Gaurav Kumar – Full-Stack Portfolio

An enterprise-grade, high-performance portfolio website built with **Next.js 16 (React 19, TypeScript)** and a **Spring Boot 3 (Java 21)** REST API backend.

---

## 🌟 Highlights & Architecture

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, modern CSS design system with Obsidian Dark glassmorphism, animated skill bars, and interactive code terminals.
- **Backend**: Spring Boot 3.3.4 on Java 21 LTS with Jakarta Validation, REST controllers, CORS configuration, and an embedded portfolio AI agent.
- **Interactive Portfolio AI**: Recruiter & visitor assistant powered by Spring Boot (`/api/chat`) with markdown parsing, suggested prompts, and project-aware reasoning.
- **Architectural Deep Dives**: Visual system flow diagrams for:
  - **QueryDocs AI**: Spring AI + PostgreSQL pgvector (HNSW Index & Cosine Distance) Conversational RAG Pipeline.
  - **SWVAS**: Microservices Vulnerability Scanning with OWASP ZAP (Academic research under Dr. Ashish Joshi, USAR GGSIPU).
- **Direct Contact Submission**: Validated contact form transmitting directly to Spring Boot (`/api/contact`) with unique tracking reference IDs (`MSG-XXXX`).

---

## 📁 Project Structure

```
gaurav-portfolio/
├── backend/                             # Spring Boot 3 + Java 21 REST API
│   ├── src/main/java/com/gaurav/portfolio/
│   │   ├── config/CorsConfig.java       # CORS configuration for Next.js frontend
│   │   ├── controller/
│   │   │   ├── PortfolioController.java # /api/profile, /api/projects, /api/skills, etc.
│   │   │   ├── ContactController.java   # /api/contact message submission
│   │   │   └── AiChatController.java    # /api/chat portfolio assistant
│   │   ├── model/                       # Profile, Project, Skill, Chat DTOs
│   │   ├── service/                     # Business logic & AI assistant reasoning
│   │   └── PortfolioApplication.java
│   ├── src/main/resources/
│   │   └── application.properties       # Server port (8085) & logging
│   ├── mvnw.cmd / mvnw                  # Maven Wrapper (Java 21)
│   └── pom.xml
│
└── frontend/                            # Next.js 16 + React 19 Client
    ├── src/
    │   ├── app/
    │   │   ├── globals.css              # Obsidian Glassmorphic Design System
    │   │   ├── layout.tsx               # SEO Metadata & Google Fonts
    │   │   └── page.tsx                 # Main portfolio page assembly
    │   ├── components/
    │   │   ├── Navbar.tsx               # Sticky glassmorphism header & live API badge
    │   │   ├── Hero.tsx                 # Pitch, DSA metrics & code terminal
    │   │   ├── ProjectsSection.tsx      # Category filter & project cards
    │   │   ├── ArchitectureDiagram.tsx  # QueryDocs AI & SWVAS system diagrams
    │   │   ├── SkillsSection.tsx        # Categorized skill matrix & progress bars
    │   │   ├── ExperienceSection.tsx    # Research under Dr. Ashish Joshi & USAR
    │   │   ├── CertificationsSection.tsx# Nasscom Gen AI 101, HackerRank & Hackathons
    │   │   ├── AiAssistantWidget.tsx    # Floating conversational AI drawer
    │   │   ├── ContactSection.tsx       # Live Spring Boot contact form
    │   │   └── Footer.tsx               # Back to top & social channels
    │   ├── lib/api.ts                   # Fetch client for Spring Boot endpoints
    │   ├── types/portfolio.ts           # Shared TypeScript interfaces
    │   └── data/fallbackData.ts         # Zero-latency hydration data
    └── package.json
```

---

## 🚀 Running Locally

### 1. Start the Spring Boot Backend (Port 8085)
```bash
cd backend
.\mvnw.cmd spring-boot:run
```
*API Base: `http://localhost:8085/api`*  
*Health Check: `http://localhost:8085/api/health`*

### 2. Start the Next.js Frontend (Port 3000 / 3001)
```bash
cd frontend
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

---

## 👨‍💻 Candidate Profile

- **Name**: Gaurav Kumar
- **Degree**: B.Tech in Artificial Intelligence & Machine Learning (2023 – 2027), CGPA: 7.6
- **Institution**: University School of Automation and Robotics (USAR), Guru Gobind Singh Indraprastha University (GGSIPU), Delhi
- **GitHub**: [https://github.com/gauravkr-usar](https://github.com/gauravkr-usar)
- **Email**: [gaurav852799@gmail.com](mailto:gaurav852799@gmail.com)
- **Phone**: +91 8527994404
- **DSA Achievements**: 500+ Problems Solved, LeetCode Rating 1580+, HackerRank 5-Star Java & 4-Star SQL
