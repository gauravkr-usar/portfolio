package com.gaurav.portfolio.service;

import com.gaurav.portfolio.model.*;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PortfolioService {

    private final Profile profile;
    private final List<Project> projects;
    private final List<SkillCategory> skillCategories;
    private final List<Experience> experiences;
    private final List<Certification> certifications;

    public PortfolioService() {
        // Initialize Profile
        Map<String, String> highlights = new LinkedHashMap<>();
        highlights.put("dsaProblems", "500+");
        highlights.put("leetcodeRating", "1580+");
        highlights.put("githubRepos", "13+");
        highlights.put("cgpa", "7.6");
        highlights.put("degree", "B.Tech AI & ML");
        highlights.put("gradYear", "2027");

        List<String> focusAreas = List.of(
            "Java 21 & Spring Boot 3",
            "GenAI, RAG & Vector Databases (pgvector)",
            "Distributed Microservices & Security (OWASP ZAP)",
            "High-Performance Modern Web (React 19 & Next.js)"
        );

        this.profile = new Profile(
            "Gaurav Kumar",
            "Full Stack Developer & AI Systems Engineer",
            "Java | Spring Boot | React | GenAI & RAG | Next.js",
            "New Delhi, India",
            "gaurav852799@gmail.com",
            "+91 8527994404",
            "https://github.com/gauravkr-usar",
            "https://www.linkedin.com/in/gauravk001/",
            "https://codolio.com/profile/gauravkr",
            "https://avatars.githubusercontent.com/u/173763159?v=4",
            "Final-year B.Tech AI/ML student at USAR (GGSIPU) building enterprise-grade full-stack applications with Java/Spring Boot, React, and Node.js, plus applied GenAI: RAG architectures with Spring AI and pgvector, LLM API integrations (Groq, OpenAI, Gemini), JWT/OAuth security, microservices with Eureka and OWASP ZAP scanning. Solved 500+ DSA problems with LeetCode rating 1580+.",
            highlights,
            focusAreas
        );

        // Initialize Projects
        this.projects = new ArrayList<>();

        projects.add(new Project(
            "swvas",
            "Secure Web Vulnerability Assessment System (SWVAS)",
            "Microservices-based Security Platform integrating OWASP ZAP",
            "Academic research project under Dr. Ashish Joshi, USAR GGSIPU. Automated vulnerability scanning and orchestration platform for registered web targets.",
            List.of(
                "Engineered a microservices-based security assessment platform in Java and Spring Boot that integrates OWASP ZAP for automated vulnerability scanning of registered web targets.",
                "Developed distributed services for target management, scan orchestration, vulnerability result processing and reporting, connected through an API Gateway with Eureka service discovery and JWT authentication.",
                "Designed manual, scheduled and deployment-triggered scan workflows; utilized PostgreSQL for persistence and Docker Compose for local service deployment."
            ),
            List.of("Java 21", "Spring Boot", "Spring Security", "Microservices", "API Gateway", "Eureka", "PostgreSQL", "Docker", "OWASP ZAP"),
            "Spring Boot & Microservices",
            "https://github.com/gauravkr-usar/secure-web-vulnerability-assessment-system",
            "",
            "Active / Under Dr. Ashish Joshi",
            true,
            List.of("Microservice Mesh", "Eureka Discovery", "OWASP ZAP Automation", "Distributed JWT Auth")
        ));

        projects.add(new Project(
            "querydocs-ai",
            "QueryDocs AI – Conversational RAG Platform",
            "Enterprise Document Intelligence with Spring AI & pgvector",
            "High-throughput RAG platform supporting PDF, DOCX, and TXT semantic chunking, HNSW vector search, and multi-model LLM reasoning.",
            List.of(
                "Ingests PDF, DOCX, and TXT files, extracts and chunks text, and stores embeddings in PostgreSQL pgvector using HNSW indexing and cosine distance for high-speed semantic retrieval.",
                "Integrated LLM providers (Groq Llama 3.3 70B, OpenAI GPT-4o, Google Gemini) with Spring AI embeddings, multi-turn chat, persisted conversation history, citations, and chunk similarity scoring.",
                "Secured REST APIs with Spring Security and JWT with per-user document isolation; documented with Swagger/OpenAPI; built a modern React 19 + TypeScript client."
            ),
            List.of("Java 21", "Spring Boot", "Spring AI", "PostgreSQL", "pgvector", "Spring Security", "JWT", "React 19", "TypeScript", "Tailwind CSS", "Docker"),
            "GenAI & RAG",
            "https://github.com/gauravkr-usar/QueryDocs_Ai",
            "",
            "Production Ready",
            true,
            List.of("HNSW Vector Indexing", "Multi-Provider LLM Router", "Chunk Similarity Citations", "Per-User Isolation")
        ));

        projects.add(new Project(
            "ai-lms",
            "AI-Powered Learning Management System",
            "MERN Stack with Gemini AI Course Discovery & Razorpay",
            "Full-stack educational platform with automated enrollment, video uploads, AI search, and secure payment processing.",
            List.of(
                "Built full-stack platform featuring course, lecture, enrollment and review modules with REST APIs and MongoDB schemas; modern React and Redux Toolkit frontend.",
                "Implemented JWT authentication, Google OAuth 2.0, and role-based access control (Student, Instructor, Admin); integrated Razorpay checkout with webhook verification.",
                "Integrated Google Gemini AI for smart course search and auto-categorization; Cloudinary for high-throughput video lecture and thumbnail uploads."
            ),
            List.of("MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "JWT", "Google OAuth", "Razorpay", "Google Gemini", "Cloudinary"),
            "Full-Stack Web & AI",
            "https://github.com/gauravkr-usar/LMS",
            "https://lms-gaurav.onrender.com",
            "Live Deployed",
            true,
            List.of("Razorpay Webhooks", "OAuth 2.0 Flow", "Gemini Semantic Search", "Redux State Mesh")
        ));

        projects.add(new Project(
            "just-eat",
            "JustEat – Full-Stack Food Ordering Platform",
            "Enterprise Spring Boot Backend with React 19",
            "Multi-tenant food ordering system with restaurant catalogs, real-time cart, and role-based management.",
            List.of(
                "Developed REST APIs and React frontend for restaurant search, dynamic menus, carts, orders and live order-status tracking with Customer, Owner and Admin roles.",
                "Implemented persistence with Spring Data JPA/Hibernate on PostgreSQL, Cloudinary image upload pipelines, Swagger/OpenAPI documentation and Docker Compose setup."
            ),
            List.of("Java 21", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "PostgreSQL", "React 19", "Vite", "Docker Compose"),
            "Spring Boot & Microservices",
            "https://github.com/gauravkr-usar/JUST-EAT",
            "",
            "Completed",
            true,
            List.of("Role-Based Access Control", "JPA Entity Modeling", "Docker Compose Ecosystem", "Swagger Docs")
        ));

        projects.add(new Project(
            "devtinder",
            "DevTinder – Developer Match & Networking",
            "Developer Connection & Collaboration Ecosystem",
            "Networking and matchmaking platform for software engineers to find hackathon partners and project collaborators.",
            List.of(
                "Designed connection requests, interactive swipe feed, real-time user profiles, and tech stack skill tagging.",
                "Built with Express.js, MongoDB, JWT auth, input validation and React UI."
            ),
            List.of("Node.js", "Express.js", "MongoDB", "React", "JWT", "Tailwind CSS"),
            "Full-Stack Web & AI",
            "https://github.com/gauravkr-usar/devTinder",
            "",
            "Completed",
            false,
            List.of("Swipe Interaction Logic", "Real-Time Connections", "Encrypted Auth")
        ));

        projects.add(new Project(
            "fitness-tracker",
            "FitnessTracker – Workout & Calorie Platform",
            "Health Analytics & Fitness Routine Tracking",
            "Track daily gym sets, calorie intake, weight logs and progress analytics with interactive charts.",
            List.of(
                "Interactive calorie analytics, custom workout routine builder, and milestone badges.",
                "RESTful backend and responsive dashboard interface."
            ),
            List.of("React", "Node.js", "Express.js", "MongoDB", "Chart.js"),
            "Full-Stack Web & AI",
            "https://github.com/gauravkr-usar/FitnessTracker",
            "",
            "Completed",
            false,
            List.of("Progress Metrics", "Routine Analytics", "Responsive Layout")
        ));

        // Initialize Skill Categories
        this.skillCategories = List.of(
            new SkillCategory("Languages", "Code", List.of(
                new SkillCategory.SkillItem("Java (Core & 21)", 95, "Advanced"),
                new SkillCategory.SkillItem("C++", 88, "Advanced"),
                new SkillCategory.SkillItem("TypeScript", 90, "Advanced"),
                new SkillCategory.SkillItem("JavaScript (ES6+)", 92, "Advanced"),
                new SkillCategory.SkillItem("SQL (PostgreSQL / MySQL)", 90, "Advanced")
            )),
            new SkillCategory("Backend & Microservices", "Server", List.of(
                new SkillCategory.SkillItem("Spring Boot 3", 94, "Advanced"),
                new SkillCategory.SkillItem("Spring Security & JWT", 92, "Advanced"),
                new SkillCategory.SkillItem("Spring Data JPA & Hibernate", 90, "Advanced"),
                new SkillCategory.SkillItem("Microservices (Eureka, Gateway)", 88, "Proficient"),
                new SkillCategory.SkillItem("Node.js & Express.js", 88, "Advanced"),
                new SkillCategory.SkillItem("RESTful API Design", 95, "Advanced")
            )),
            new SkillCategory("AI, GenAI & RAG", "Brain", List.of(
                new SkillCategory.SkillItem("Spring AI", 92, "Advanced"),
                new SkillCategory.SkillItem("RAG Architectures", 90, "Advanced"),
                new SkillCategory.SkillItem("pgvector & HNSW Vector Indexing", 90, "Advanced"),
                new SkillCategory.SkillItem("Semantic Search & Embeddings", 92, "Advanced"),
                new SkillCategory.SkillItem("LLMs (Groq Llama 3.3, GPT-4o, Gemini)", 92, "Advanced")
            )),
            new SkillCategory("Frontend & UI Engineering", "Layout", List.of(
                new SkillCategory.SkillItem("Next.js & App Router", 90, "Advanced"),
                new SkillCategory.SkillItem("React 19 & Hooks", 94, "Advanced"),
                new SkillCategory.SkillItem("Redux Toolkit & State Management", 88, "Proficient"),
                new SkillCategory.SkillItem("Responsive CSS & Modern Design", 92, "Advanced"),
                new SkillCategory.SkillItem("Axios & REST Client Integration", 94, "Advanced")
            )),
            new SkillCategory("Databases & Cloud Storage", "Database", List.of(
                new SkillCategory.SkillItem("PostgreSQL & pgvector", 92, "Advanced"),
                new SkillCategory.SkillItem("MongoDB", 88, "Proficient"),
                new SkillCategory.SkillItem("MySQL", 85, "Proficient"),
                new SkillCategory.SkillItem("Cloudinary CDN", 90, "Proficient")
            )),
            new SkillCategory("Security, DevOps & Tools", "Shield", List.of(
                new SkillCategory.SkillItem("OWASP ZAP Vulnerability Scanning", 88, "Proficient"),
                new SkillCategory.SkillItem("Docker & Docker Compose", 88, "Proficient"),
                new SkillCategory.SkillItem("Maven & Build Automation", 90, "Advanced"),
                new SkillCategory.SkillItem("Git & GitHub CI/CD", 92, "Advanced"),
                new SkillCategory.SkillItem("Swagger / OpenAPI", 92, "Advanced"),
                new SkillCategory.SkillItem("Razorpay Payment Gateway", 90, "Proficient")
            ))
        );

        // Initialize Experience
        this.experiences = List.of(
            new Experience(
                "swvas-research",
                "Lead Backend Engineer – Academic Project",
                "University School of Automation and Robotics (USAR), GGSIPU",
                "Dr. Ashish Joshi",
                "Delhi, India",
                "Aug 2026 – Present",
                "Academic Research & Engineering",
                List.of(
                    "Architected and developed SWVAS (Secure Web Vulnerability Assessment System) microservices platform with OWASP ZAP automated scanning.",
                    "Designed API Gateway with Spring Cloud Eureka service discovery, centralized JWT authentication filter, and target orchestration pipeline.",
                    "Implemented scheduled scan runners, automated vulnerability severity classification, and PDF/JSON reporting workflows."
                ),
                List.of("Java 21", "Spring Boot", "Spring Security", "Eureka", "API Gateway", "PostgreSQL", "Docker", "OWASP ZAP")
            ),
            new Experience(
                "education-usar",
                "B.Tech in Artificial Intelligence and Machine Learning",
                "University School of Automation and Robotics (USAR), GGSIPU",
                "Faculty of AI & ML",
                "Delhi, India",
                "2023 – 2027",
                "Formal Education",
                List.of(
                    "Current CGPA: 7.6 / 10.0.",
                    "Core coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Machine Learning, Deep Learning, Distributed Computing.",
                    "Active coding team leader and hackathon finalist."
                ),
                List.of("Data Structures & Algorithms", "Java", "Python", "Machine Learning", "System Design")
            )
        );

        // Initialize Certifications & Achievements
        this.certifications = List.of(
            new Certification(
                "cert-genai",
                "Gen AI 101 Certification",
                "FutureSkills Prime / IT-ITeS SSC Nasscom",
                "October 2026",
                "https://futureskillsprime.in",
                "Certification",
                "Comprehensive certification validating expertise in Generative AI architectures, prompt engineering, foundation models, and ethical AI deployment."
            ),
            new Certification(
                "cert-hackerrank-java",
                "HackerRank 5-Star Java Certificate",
                "HackerRank",
                "2024",
                "https://www.hackerrank.com",
                "Certification",
                "Verified proficiency in object-oriented programming, multithreading, collections framework, lambda expressions, and memory management in Java."
            ),
            new Certification(
                "cert-hackerrank-sql",
                "HackerRank 4-Star SQL Certificate",
                "HackerRank",
                "2024",
                "https://www.hackerrank.com",
                "Certification",
                "Demonstrated advanced SQL capability: complex multi-table joins, subqueries, aggregation, window functions, and indexing."
            ),
            new Certification(
                "achieve-dsa",
                "500+ DSA Problems Solved & LeetCode 1580+",
                "LeetCode / Codolio",
                "Consistent",
                "https://codolio.com/profile/gauravkr",
                "Achievement",
                "Mastered array manipulation, dynamic programming, tree traversals, graph algorithms, and sliding window techniques."
            ),
            new Certification(
                "achieve-hackathon",
                "Runner-up at UIET 'Brain and Bots'",
                "UIET Annual Tech Fest",
                "2025",
                "",
                "Achievement",
                "Built an automated IoT & AI software integration within a strict 36-hour hackathon timeframe; awarded 2nd prize across 60+ collegiate teams."
            ),
            new Certification(
                "achieve-sih",
                "Internal Round Cleared – Smart India Hackathon",
                "Government of India / USAR GGSIPU",
                "2025",
                "",
                "Achievement",
                "Qualified the competitive internal screening round for Smart India Hackathon representing USAR GGSIPU."
            )
        );
    }

    public Profile getProfile() { return profile; }
    public List<Project> getProjects() { return projects; }
    public List<SkillCategory> getSkillCategories() { return skillCategories; }
    public List<Experience> getExperiences() { return experiences; }
    public List<Certification> getCertifications() { return certifications; }

    public Map<String, Object> getStats() {
        Map<String, Object> stats = new LinkedHashMap<>();
        stats.put("dsaCount", 500);
        stats.put("leetcodeRating", 1580);
        stats.put("reposCount", 13);
        stats.put("javaStarRating", 5);
        stats.put("sqlStarRating", 4);
        stats.put("cgpa", 7.6);
        stats.put("primaryTech", "Java & Spring Boot");
        stats.put("aiSpecialization", "Spring AI & RAG");
        return stats;
    }
}
