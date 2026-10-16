package com.gaurav.portfolio.service;

import com.gaurav.portfolio.model.ChatRequest;
import com.gaurav.portfolio.model.ChatResponse;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AiAssistantService {

    public ChatResponse handleChat(ChatRequest request) {
        String query = request.getMessage().toLowerCase().trim();

        if (query.contains("querydocs") || query.contains("rag") || query.contains("spring ai") || query.contains("pgvector") || query.contains("vector")) {
            return new ChatResponse(
                "### **QueryDocs AI – Conversational RAG Platform**\n\n" +
                "Gaurav engineered **QueryDocs AI** using **Java 21, Spring Boot 3, Spring AI, and PostgreSQL pgvector**:\n\n" +
                "- **Document Ingestion**: Seamlessly processes PDF, DOCX, and TXT files, extracting raw text and applying recursive chunking.\n" +
                "- **High-Speed Vector Search**: Generates vector embeddings stored in PostgreSQL with **HNSW index** using cosine similarity distance.\n" +
                "- **Multi-LLM Integration**: Dynamically routes prompts to **Groq Llama 3.3 70B**, **OpenAI GPT-4o**, and **Google Gemini**.\n" +
                "- **Enterprise Features**: Per-user document isolation with JWT authentication, chunk-level similarity scores, source citations, and multi-turn conversational history.\n\n" +
                "You can inspect the code on GitHub: [gauravkr-usar/QueryDocs_Ai](https://github.com/gauravkr-usar/QueryDocs_Ai).",
                List.of("Tell me about SWVAS project", "What are Gaurav's Spring Boot skills?", "Show LeetCode achievements"),
                List.of("querydocs-ai")
            );
        }

        if (query.contains("swvas") || query.contains("vulnerability") || query.contains("owasp") || query.contains("ashish") || query.contains("microservice")) {
            return new ChatResponse(
                "### **SWVAS – Secure Web Vulnerability Assessment System**\n\n" +
                "This is an academic research project under **Dr. Ashish Joshi** at **USAR, GGSIPU** (Aug 2026 – Present):\n\n" +
                "- **Microservices Mesh**: Built in Java 21 & Spring Boot, connected via Spring Cloud Netflix Eureka service discovery and an API Gateway.\n" +
                "- **OWASP ZAP Integration**: Automated scanning pipelines for registered web targets to detect vulnerabilities, SQL injection, XSS, and security misconfigurations.\n" +
                "- **Orchestration**: Manages scan schedules, targets, asynchronous task execution, and automated report generation.\n" +
                "- **Deployment**: Containerized using Docker Compose with PostgreSQL for persistence.\n\n" +
                "Repository: [secure-web-vulnerability-assessment-system](https://github.com/gauravkr-usar/secure-web-vulnerability-assessment-system).",
                List.of("Tell me about QueryDocs AI", "What certifications does Gaurav have?", "How can I contact Gaurav?"),
                List.of("swvas")
            );
        }

        if (query.contains("justeat") || query.contains("food") || query.contains("lms") || query.contains("devtinder") || query.contains("project")) {
            return new ChatResponse(
                "### **Gaurav's Core Projects**\n\n" +
                "1. **SWVAS**: Microservices vulnerability scanning platform with Spring Boot & OWASP ZAP (Under Dr. Ashish Joshi).\n" +
                "2. **QueryDocs AI**: Enterprise Conversational RAG with Java 21, Spring AI, pgvector HNSW index, and Groq/Gemini/GPT-4o.\n" +
                "3. **AI-Powered LMS**: Full-stack MERN with Google Gemini AI course search, Google OAuth, and Razorpay payment checkout.\n" +
                "4. **JustEat**: Full-stack food ordering platform with Spring Boot, Spring Security, JWT, PostgreSQL, and React 19.\n" +
                "5. **DevTinder**: Developer networking and collaboration platform with real-time matchmaking.\n\n" +
                "Which project would you like to explore deeper?",
                List.of("Tell me about QueryDocs AI", "Tell me about SWVAS", "Show frontend & backend tech stack"),
                List.of("swvas", "querydocs-ai", "ai-lms", "just-eat")
            );
        }

        if (query.contains("dsa") || query.contains("leetcode") || query.contains("problem") || query.contains("rating") || query.contains("hackerrank") || query.contains("codolio")) {
            return new ChatResponse(
                "### **Problem Solving & Competitive Programming**\n\n" +
                "- **500+ DSA Problems Solved**: Proficient in Data Structures, Dynamic Programming, Trees, Graphs, Sliding Window, and Greedy algorithms.\n" +
                "- **LeetCode Rating**: **1580+** (Active competitor on LeetCode & Codolio).\n" +
                "- **HackerRank**: **5-Star Java** badge & **4-Star SQL** badge.\n" +
                "- **Hackathons**: Runner-up at UIET *'Brain and Bots'* & cleared internal screening round for **Smart India Hackathon**.\n\n" +
                "Profile Links:\n" +
                "- [LeetCode Profile (gaurav_usar)](https://leetcode.com/u/gaurav_usar/)\n" +
                "- [Codolio Profile (gaurav_usar)](https://codolio.com/profile/gaurav_usar)",
                List.of("What is Gaurav's tech stack?", "Show university & education", "Contact Gaurav"),
                Collections.emptyList()
            );
        }

        if (query.contains("skill") || query.contains("tech stack") || query.contains("stack") || query.contains("java") || query.contains("spring")) {
            return new ChatResponse(
                "### **Technical Skill Matrix**\n\n" +
                "- **Core Languages**: Java (21, Core, Concurrency, Streams), C++, TypeScript, JavaScript (ES6+), SQL.\n" +
                "- **Backend & Microservices**: Spring Boot 3, Spring Security, Spring Data JPA/Hibernate, Eureka, API Gateway, REST APIs, Node.js, Express.js.\n" +
                "- **AI & GenAI**: Spring AI, RAG Architectures, Vector Databases (pgvector with HNSW), Semantic Embeddings, Groq Llama 3.3, OpenAI GPT-4o, Google Gemini API.\n" +
                "- **Frontend**: Next.js (App Router), React 19, TypeScript, Redux Toolkit, Modern CSS, Axios.\n" +
                "- **Databases & DevOps**: PostgreSQL, MongoDB, MySQL, Docker, Docker Compose, Maven, Git, Postman, Swagger/OpenAPI, OWASP ZAP.",
                List.of("Show recent projects", "Tell me about academic experience", "How to hire Gaurav?"),
                Collections.emptyList()
            );
        }

        if (query.contains("contact") || query.contains("hire") || query.contains("email") || query.contains("phone") || query.contains("reach")) {
            return new ChatResponse(
                "### **Get in Touch with Gaurav Kumar**\n\n" +
                "Gaurav is actively open for **Full-Stack Developer**, **Java / Spring Boot**, and **AI / GenAI Engineering** roles:\n\n" +
                "- **Email**: [gaurav852799@gmail.com](mailto:gaurav852799@gmail.com)\n" +
                "- **Phone**: [+91 8527994404](tel:+918527994404) (8527994404)\n" +
                "- **Location**: New Delhi, India\n" +
                "- **GitHub**: [github.com/gauravkr-usar](https://github.com/gauravkr-usar)\n" +
                "- **LinkedIn**: [linkedin.com/in/gauravk001](https://www.linkedin.com/in/gauravk001/)\n\n" +
                "You can also send a direct message right below in the **Contact** section!",
                List.of("Send a message", "Tell me about QueryDocs AI", "View certifications"),
                Collections.emptyList()
            );
        }

        if (query.contains("education") || query.contains("college") || query.contains("university") || query.contains("usar") || query.contains("cgpa")) {
            return new ChatResponse(
                "### **Education & Academic Background**\n\n" +
                "- **Degree**: B.Tech in **Artificial Intelligence and Machine Learning** (2023 – 2027)\n" +
                "- **Institution**: University School of Automation and Robotics (USAR), Guru Gobind Singh Indraprastha University (GGSIPU), Delhi\n" +
                "- **Academic Score**: **7.6 CGPA**\n" +
                "- **Research Focus**: Academic research project under **Dr. Ashish Joshi** on automated microservices vulnerability scanning.",
                List.of("Tell me about SWVAS project", "What are Gaurav's skills?", "Show GitHub repos"),
                Collections.emptyList()
            );
        }

        // Default friendly response
        return new ChatResponse(
            "Hello! I am Gaurav Kumar's AI Portfolio Assistant. I can tell you all about his:\n\n" +
            "- **Java & Spring Boot 3 & Microservices** background\n" +
            "- **GenAI / RAG Platform (QueryDocs AI)** with Spring AI and pgvector\n" +
            "- **Academic research under Dr. Ashish Joshi (SWVAS)** with OWASP ZAP\n" +
            "- **Full-stack projects** (Next.js, React 19, MERN LMS, JustEat)\n" +
            "- **500+ LeetCode DSA problem solutions** and certifications\n\n" +
            "What would you like to explore?",
            List.of("Tell me about QueryDocs AI", "What is SWVAS?", "Show technical skills", "How to contact Gaurav?"),
            List.of("swvas", "querydocs-ai", "ai-lms")
        );
    }
}
