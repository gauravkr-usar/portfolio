import { Profile, Project, SkillCategory, Experience, Certification, Stats } from '../types/portfolio';

export const fallbackProfile: Profile = {
  name: "Gaurav Kumar",
  title: "Full Stack Developer & AI Systems Engineer",
  subtitle: "Java 21 | Spring Boot 3 | React 19 | GenAI & RAG | Next.js",
  location: "New Delhi, India",
  email: "gaurav852799@gmail.com",
  phone: "+91 8527994404",
  githubUrl: "https://github.com/gauravkr-usar",
  linkedinUrl: "https://www.linkedin.com/in/gauravk001/",
  codolioUrl: "https://codolio.com/profile/gaurav_usar",
  leetcodeUrl: "https://leetcode.com/u/gaurav_usar/",
  avatarUrl: "https://avatars.githubusercontent.com/u/173763159?v=4",
  summary: "Final-year B.Tech AI/ML student at USAR (GGSIPU) building enterprise-grade full-stack applications with Java/Spring Boot, React, and Node.js, plus applied GenAI: RAG architectures with Spring AI and pgvector, LLM API integrations (Groq, OpenAI, Gemini), JWT/OAuth security, microservices with Eureka and OWASP ZAP scanning. Solved 500+ DSA problems with LeetCode rating 1580+.",
  highlights: {
    dsaProblems: "500+",
    leetcodeRating: "1580+",
    githubRepos: "13+",
    cgpa: "7.6",
    degree: "B.Tech AI & ML",
    gradYear: "2027"
  },
  focusAreas: [
    "Java 21 & Spring Boot 3 Ecosystem",
    "GenAI, RAG & Vector Databases (pgvector)",
    "Distributed Microservices & Security (OWASP ZAP)",
    "High-Performance Modern Web (React 19 & Next.js)"
  ]
};

export const fallbackProjects: Project[] = [
  {
    id: "swvas",
    title: "Secure Web Vulnerability Assessment System (SWVAS)",
    subtitle: "Microservices-based Security Platform integrating OWASP ZAP",
    description: "Academic research project under Dr. Ashish Joshi, USAR GGSIPU. Automated vulnerability scanning and orchestration platform for registered web targets.",
    bulletPoints: [
      "Engineered a microservices-based security assessment platform in Java and Spring Boot that integrates OWASP ZAP for automated vulnerability scanning of registered web targets.",
      "Developed distributed services for target management, scan orchestration, vulnerability result processing and reporting, connected through an API Gateway with Eureka service discovery and JWT authentication.",
      "Designed manual, scheduled and deployment-triggered scan workflows; utilized PostgreSQL for persistence and Docker Compose for local service deployment."
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Security", "Microservices", "API Gateway", "Eureka", "PostgreSQL", "Docker", "OWASP ZAP"],
    category: "Spring Boot & Microservices",
    githubUrl: "https://github.com/gauravkr-usar/secure-web-vulnerability-assessment-system",
    status: "Active / Under Dr. Ashish Joshi",
    featured: true,
    architecturalHighlights: [
      "Microservice Mesh with Eureka Discovery",
      "Centralized Spring Cloud API Gateway",
      "OWASP ZAP Headless Automated Scanning",
      "Distributed JWT Authentication Filter",
      "Asynchronous Scan Orchestration"
    ]
  },
  {
    id: "querydocs-ai",
    title: "QueryDocs AI – Conversational RAG Platform",
    subtitle: "Enterprise Document Intelligence with Spring AI & pgvector",
    description: "High-throughput RAG platform supporting PDF, DOCX, and TXT semantic chunking, HNSW vector search, and multi-model LLM reasoning.",
    bulletPoints: [
      "Ingests PDF, DOCX, and TXT files, extracts and chunks text, and stores embeddings in PostgreSQL pgvector using HNSW indexing and cosine distance for high-speed semantic retrieval.",
      "Integrated LLM providers (Groq Llama 3.3 70B, OpenAI GPT-4o, Google Gemini) with Spring AI embeddings, multi-turn chat, persisted conversation history, citations, and chunk similarity scoring.",
      "Secured REST APIs with Spring Security and JWT with per-user document isolation; documented with Swagger/OpenAPI; built a modern React 19 + TypeScript client."
    ],
    technologies: ["Java 21", "Spring Boot", "Spring AI", "PostgreSQL", "pgvector", "Spring Security", "JWT", "React 19", "TypeScript", "Tailwind CSS", "Docker"],
    category: "GenAI & RAG",
    githubUrl: "https://github.com/gauravkr-usar/QueryDocs_Ai",
    status: "Production Ready",
    featured: true,
    architecturalHighlights: [
      "HNSW Vector Indexing with Cosine Distance",
      "Multi-Provider LLM Router (Groq, GPT-4o, Gemini)",
      "Chunk-Level Similarity Scores & Source Citations",
      "Spring Security JWT Per-User Document Isolation",
      "Multi-Turn Chat with Persisted History"
    ]
  },
  {
    id: "ai-lms",
    title: "AI-Powered Learning Management System",
    subtitle: "MERN Stack with Gemini AI Course Discovery & Razorpay",
    description: "Full-stack educational platform with automated enrollment, video uploads, AI search, and secure payment processing.",
    bulletPoints: [
      "Built full-stack platform featuring course, lecture, enrollment and review modules with REST APIs and MongoDB schemas; modern React and Redux Toolkit frontend.",
      "Implemented JWT authentication, Google OAuth 2.0, and role-based access control (Student, Instructor, Admin); integrated Razorpay checkout with webhook verification.",
      "Integrated Google Gemini AI for smart course search and auto-categorization; Cloudinary for high-throughput video lecture and thumbnail uploads."
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "JWT", "Google OAuth", "Razorpay", "Google Gemini", "Cloudinary"],
    category: "Full-Stack Web",
    githubUrl: "https://github.com/gauravkr-usar/LMS",
    liveUrl: "https://lms-gaurav.onrender.com",
    status: "Live Deployed",
    featured: true,
    architecturalHighlights: [
      "Razorpay Checkout & Webhook Payment Verification",
      "Google OAuth 2.0 & Role-Based Access Control",
      "Gemini AI Semantic Course Discovery & Tagging",
      "Redux Toolkit Global State Mesh",
      "Cloudinary High-Throughput Media Pipeline"
    ]
  },
  {
    id: "just-eat",
    title: "JustEat – Full-Stack Food Ordering Platform",
    subtitle: "Enterprise Spring Boot Backend with React 19",
    description: "Multi-tenant food ordering system with restaurant catalogs, real-time cart, and role-based management.",
    bulletPoints: [
      "Developed REST APIs and React frontend for restaurant search, dynamic menus, carts, orders and live order-status tracking with Customer, Owner and Admin roles.",
      "Implemented persistence with Spring Data JPA/Hibernate on PostgreSQL, Cloudinary image upload pipelines, Swagger/OpenAPI documentation and Docker Compose setup."
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "PostgreSQL", "React 19", "Vite", "Docker Compose"],
    category: "Spring Boot & Microservices",
    githubUrl: "https://github.com/gauravkr-usar/JUST-EAT",
    status: "Completed",
    featured: true,
    architecturalHighlights: [
      "Role-Based Access Control (Customer, Owner, Admin)",
      "Spring Data JPA & Hibernate Entity Relations",
      "Docker Compose Multi-Container Deployment",
      "Swagger / OpenAPI Interactive API Spec"
    ]
  },
  {
    id: "devtinder",
    title: "DevTinder – Developer Networking Platform",
    subtitle: "Developer Matchmaking & Tech Collaboration Platform",
    description: "Matchmaking platform for software engineers to find hackathon partners and project collaborators.",
    bulletPoints: [
      "Designed connection requests, interactive swipe feed, real-time user profiles, and tech stack skill tagging.",
      "Built with Express.js, MongoDB, JWT auth, input validation and responsive React UI."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "JWT", "Tailwind CSS"],
    category: "Full-Stack Web",
    githubUrl: "https://github.com/gauravkr-usar/devTinder",
    status: "Completed",
    featured: false,
    architecturalHighlights: [
      "Interactive Match Algorithm",
      "Skill-Based Feed Filtering",
      "Secure JWT Session Management"
    ]
  },
  {
    id: "fitness-tracker",
    title: "FitnessTracker – Workout & Health Analytics",
    subtitle: "Health & Routine Monitoring Platform",
    description: "Track daily gym sets, calorie intake, weight logs and progress analytics with interactive charts.",
    bulletPoints: [
      "Interactive calorie analytics, custom workout routine builder, and milestone badges.",
      "RESTful backend and responsive dashboard interface."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    category: "Full-Stack Web",
    githubUrl: "https://github.com/gauravkr-usar/FitnessTracker",
    status: "Completed",
    featured: false,
    architecturalHighlights: [
      "Real-Time Caloric Aggregation",
      "Dynamic Exercise Set Logger",
      "Responsive Health Dashboard"
    ]
  }
];

export const fallbackSkillCategories: SkillCategory[] = [
  {
    category: "Languages",
    iconName: "Code",
    skills: [
      { name: "Java (Core & 21)", proficiency: 95, level: "Advanced" },
      { name: "C++", proficiency: 88, level: "Advanced" },
      { name: "TypeScript", proficiency: 90, level: "Advanced" },
      { name: "JavaScript (ES6+)", proficiency: 92, level: "Advanced" },
      { name: "SQL (PostgreSQL / MySQL)", proficiency: 90, level: "Advanced" }
    ]
  },
  {
    category: "Backend & Microservices",
    iconName: "Server",
    skills: [
      { name: "Spring Boot 3", proficiency: 94, level: "Advanced" },
      { name: "Spring Security & JWT", proficiency: 92, level: "Advanced" },
      { name: "Spring Data JPA & Hibernate", proficiency: 90, level: "Advanced" },
      { name: "Microservices (Eureka, Gateway)", proficiency: 88, level: "Proficient" },
      { name: "Node.js & Express.js", proficiency: 88, level: "Advanced" },
      { name: "RESTful API Design & OpenAPI", proficiency: 95, level: "Advanced" }
    ]
  },
  {
    category: "AI, GenAI & RAG",
    iconName: "Brain",
    skills: [
      { name: "Spring AI Framework", proficiency: 92, level: "Advanced" },
      { name: "RAG Architectures", proficiency: 90, level: "Advanced" },
      { name: "pgvector & HNSW Vector Indexing", proficiency: 90, level: "Advanced" },
      { name: "Semantic Search & Embeddings", proficiency: 92, level: "Advanced" },
      { name: "LLMs (Groq Llama 3.3, GPT-4o, Gemini)", proficiency: 92, level: "Advanced" }
    ]
  },
  {
    category: "Frontend & UI Engineering",
    iconName: "Layout",
    skills: [
      { name: "Next.js (App Router)", proficiency: 90, level: "Advanced" },
      { name: "React 19 & Hooks", proficiency: 94, level: "Advanced" },
      { name: "Redux Toolkit & State Management", proficiency: 88, level: "Proficient" },
      { name: "Modern CSS & Responsive Design", proficiency: 92, level: "Advanced" },
      { name: "Axios & Client-Side Fetch", proficiency: 94, level: "Advanced" }
    ]
  },
  {
    category: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL & pgvector", proficiency: 92, level: "Advanced" },
      { name: "MongoDB", proficiency: 88, level: "Proficient" },
      { name: "MySQL", proficiency: 85, level: "Proficient" },
      { name: "Cloudinary CDN", proficiency: 90, level: "Proficient" }
    ]
  },
  {
    category: "Security, DevOps & Tools",
    iconName: "Shield",
    skills: [
      { name: "OWASP ZAP Vulnerability Scanning", proficiency: 88, level: "Proficient" },
      { name: "Docker & Docker Compose", proficiency: 88, level: "Proficient" },
      { name: "Maven & Build Automation", proficiency: 90, level: "Advanced" },
      { name: "Git & GitHub Workflows", proficiency: 92, level: "Advanced" },
      { name: "Swagger / OpenAPI Docs", proficiency: 92, level: "Advanced" },
      { name: "Razorpay Payment Gateway", proficiency: 90, level: "Proficient" }
    ]
  }
];

export const fallbackExperiences: Experience[] = [
  {
    id: "swvas-research",
    role: "Lead Backend Engineer – Academic Project",
    organization: "University School of Automation and Robotics (USAR), GGSIPU",
    mentor: "Dr. Ashish Joshi",
    location: "Delhi, India",
    period: "Aug 2026 – Present",
    type: "Academic Research & Engineering",
    descriptionPoints: [
      "Architected and developed SWVAS (Secure Web Vulnerability Assessment System) microservices platform with OWASP ZAP automated scanning.",
      "Designed API Gateway with Spring Cloud Eureka service discovery, centralized JWT authentication filter, and target orchestration pipeline.",
      "Implemented scheduled scan runners, automated vulnerability severity classification, and PDF/JSON reporting workflows."
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Security", "Eureka", "API Gateway", "PostgreSQL", "Docker", "OWASP ZAP"]
  },
  {
    id: "education-usar",
    role: "B.Tech in Artificial Intelligence and Machine Learning",
    organization: "University School of Automation and Robotics (USAR), GGSIPU",
    mentor: "Faculty of AI & ML",
    location: "Delhi, India",
    period: "2023 – 2027",
    type: "Formal Education",
    descriptionPoints: [
      "Current CGPA: 7.6 / 10.0.",
      "Core coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Machine Learning, Deep Learning, Distributed Systems.",
      "Active competitive programmer and collegiate hackathon finalist."
    ],
    technologies: ["Data Structures & Algorithms", "Java", "Python", "Machine Learning", "System Design"]
  }
];

export const fallbackCertifications: Certification[] = [
  {
    id: "cert-genai",
    title: "Gen AI 101 Certification",
    issuer: "FutureSkills Prime / IT-ITeS SSC Nasscom",
    date: "October 2026",
    credentialUrl: "https://futureskillsprime.in",
    category: "Certification",
    description: "Comprehensive certification validating expertise in Generative AI architectures, prompt engineering, foundation models, and ethical AI deployment."
  },
  {
    id: "cert-hackerrank-java",
    title: "HackerRank 5-Star Java Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialUrl: "https://www.hackerrank.com",
    category: "Certification",
    description: "Verified proficiency in object-oriented programming, multithreading, collections framework, lambda expressions, and memory management in Java."
  },
  {
    id: "cert-hackerrank-sql",
    title: "HackerRank 4-Star SQL Certificate",
    issuer: "HackerRank",
    date: "2024",
    credentialUrl: "https://www.hackerrank.com",
    category: "Certification",
    description: "Demonstrated advanced SQL capability: complex multi-table joins, subqueries, aggregation, window functions, and indexing."
  },
  {
    id: "achieve-dsa",
    title: "500+ DSA Problems Solved & LeetCode 1580+",
    issuer: "LeetCode & Codolio Verified",
    date: "Consistent",
    credentialUrl: "https://leetcode.com/u/gaurav_usar/",
    category: "Achievement",
    description: "Mastered array manipulation, dynamic programming, tree traversals, graph algorithms, and sliding window techniques."
  },
  {
    id: "achieve-hackathon",
    title: "Runner-up at UIET 'Brain and Bots'",
    issuer: "UIET Annual Tech Fest",
    date: "2025",
    credentialUrl: "",
    category: "Achievement",
    description: "Built an automated IoT & AI software integration within a strict 36-hour hackathon timeframe; awarded 2nd prize across 60+ collegiate teams."
  },
  {
    id: "achieve-sih",
    title: "Internal Round Cleared – Smart India Hackathon",
    issuer: "Government of India / USAR GGSIPU",
    date: "2025",
    credentialUrl: "",
    category: "Achievement",
    description: "Qualified the competitive internal screening round for Smart India Hackathon representing USAR GGSIPU."
  }
];

export const fallbackStats: Stats = {
  dsaCount: 500,
  leetcodeRating: 1580,
  reposCount: 13,
  javaStarRating: 5,
  sqlStarRating: 4,
  cgpa: 7.6,
  primaryTech: "Java & Spring Boot",
  aiSpecialization: "Spring AI & RAG"
};
