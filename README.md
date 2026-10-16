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
│   ├── Dockerfile                       # Multi-stage production container
│   ├── mvnw.cmd / mvnw                  # Maven Wrapper (Java 21)
│   └── pom.xml
│
├── frontend/                            # Next.js 16 + React 19 Client
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/                     # Serverless proxy handlers (chat, contact, health)
│   │   │   ├── globals.css              # Obsidian Glassmorphic Design System
│   │   │   ├── layout.tsx               # SEO Metadata & Google Fonts
│   │   │   └── page.tsx                 # Main portfolio page assembly
│   │   ├── components/                  # Navbar, Hero, Projects, Skills, Contact, Footer
│   │   ├── lib/api.ts                   # Fetch client with intelligent local/cloud routing
│   │   └── data/fallbackData.ts         # Zero-latency hydration data
│   ├── vercel.json                      # Vercel configuration
│   └── package.json
│
├── render.yaml                          # Render Blueprint for Spring Boot Web Service
└── README.md
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

## ☁️ Deployment & Hosting Guide

### Option A: Deploy Frontend to Vercel (Recommended • 100% Free • ~60 Seconds)
1. Go to **[vercel.com/new](https://vercel.com/new)** and sign in with GitHub.
2. Select your repository: **`gauravkr-usar/portfolio`**.
3. Under **Root Directory**, click **Edit** and choose: **`frontend`**.
4. Click **Deploy**!
*Your portfolio will be live at `https://portfolio-xxxx.vercel.app` with zero setup.*

### Option B: Deploy Backend to Render (Free Web Service)
1. Log in to **[render.com](https://dashboard.render.com/)**.
2. Click **New +** -> **Web Service**.
3. Select your repository: **`gauravkr-usar/portfolio`**.
4. Configure:
   - **Root Directory**: `backend`
   - **Runtime**: `Docker` (or Java with Maven)
   - **Plan**: `Free`
5. Click **Deploy Web Service**!
6. Once deployed, take your Render URL (e.g. `https://gaurav-portfolio-backend.onrender.com`) and add it to Vercel as an environment variable:
   `SPRING_BOOT_URL=https://gaurav-portfolio-backend.onrender.com`

---

## 👨‍💻 Candidate Profile

- **Name**: Gaurav Kumar
- **Degree**: B.Tech in Artificial Intelligence & Machine Learning (2023 – 2027), CGPA: 7.6
- **Institution**: University School of Automation and Robotics (USAR), Guru Gobind Singh Indraprastha University (GGSIPU), Delhi
- **GitHub**: [https://github.com/gauravkr-usar](https://github.com/gauravkr-usar)
- **LinkedIn**: [https://www.linkedin.com/in/gauravk001/](https://www.linkedin.com/in/gauravk001/)
- **LeetCode**: [https://leetcode.com/u/gaurav_usar/](https://leetcode.com/u/gaurav_usar/)
- **Codolio**: [https://codolio.com/profile/gaurav_usar](https://codolio.com/profile/gaurav_usar)
- **Email**: [gaurav852799@gmail.com](mailto:gaurav852799@gmail.com)
- **Phone**: +91 8527994404
