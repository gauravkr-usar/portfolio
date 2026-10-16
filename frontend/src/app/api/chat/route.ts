import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message cannot be empty.' }, { status: 400 });
    }

    // If external Spring Boot URL is configured, proxy to Spring Boot
    const springBootUrl = process.env.SPRING_BOOT_URL;
    if (springBootUrl) {
      try {
        const res = await fetch(`${springBootUrl}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, history })
        });
        if (res.ok) {
          return NextResponse.json(await res.json());
        }
      } catch (err) {
        console.error('Spring Boot chat proxy failed, falling back to Next.js handler', err);
      }
    }

    const query = message.toLowerCase().trim();

    if (query.includes('querydocs') || query.includes('rag') || query.includes('spring ai') || query.includes('pgvector') || query.includes('vector')) {
      return NextResponse.json({
        response: `### **QueryDocs AI – Conversational RAG Platform**\n\nGaurav engineered **QueryDocs AI** using **Java 21, Spring Boot 3, Spring AI, and PostgreSQL pgvector**:\n\n- **Document Ingestion**: Seamlessly processes PDF, DOCX, and TXT files, extracting raw text and applying recursive chunking.\n- **High-Speed Vector Search**: Generates vector embeddings stored in PostgreSQL with **HNSW index** using cosine similarity distance.\n- **Multi-LLM Integration**: Dynamically routes prompts to **Groq Llama 3.3 70B**, **OpenAI GPT-4o**, and **Google Gemini**.\n- **Enterprise Features**: Per-user document isolation with JWT authentication, chunk-level similarity scores, source citations, and multi-turn conversational history.\n\nGitHub Repository: [gauravkr-usar/QueryDocs_Ai](https://github.com/gauravkr-usar/QueryDocs_Ai)`,
        suggestions: ["Tell me about SWVAS project", "What are Gaurav's Spring Boot skills?", "Show LeetCode achievements"],
        relevantProjects: ["querydocs-ai"],
        timestamp: Date.now()
      });
    }

    if (query.includes('swvas') || query.includes('vulnerability') || query.includes('owasp') || query.includes('ashish') || query.includes('microservice')) {
      return NextResponse.json({
        response: `### **SWVAS – Secure Web Vulnerability Assessment System**\n\nAcademic research project under **Dr. Ashish Joshi** at **USAR, GGSIPU** (Aug 2026 – Present):\n\n- **Microservices Mesh**: Built in Java 21 & Spring Boot, connected via Spring Cloud Netflix Eureka service discovery and an API Gateway.\n- **OWASP ZAP Integration**: Automated scanning pipelines for registered web targets to detect vulnerabilities, SQL injection, XSS, and security misconfigurations.\n- **Orchestration**: Manages scan schedules, targets, asynchronous task execution, and automated report generation.\n- **Deployment**: Containerized using Docker Compose with PostgreSQL for persistence.\n\nRepository: [secure-web-vulnerability-assessment-system](https://github.com/gauravkr-usar/secure-web-vulnerability-assessment-system)`,
        suggestions: ["Tell me about QueryDocs AI", "What certifications does Gaurav have?", "How can I contact Gaurav?"],
        relevantProjects: ["swvas"],
        timestamp: Date.now()
      });
    }

    if (query.includes('dsa') || query.includes('leetcode') || query.includes('codolio') || query.includes('rating') || query.includes('hackerrank')) {
      return NextResponse.json({
        response: `### **Problem Solving & Competitive Programming**\n\n- **500+ DSA Problems Solved**: Proficient in Data Structures, Dynamic Programming, Trees, Graphs, Sliding Window, and Greedy algorithms.\n- **LeetCode Rating**: **1580+** (Active competitor on LeetCode & Codolio).\n- **HackerRank**: **5-Star Java** badge & **4-Star SQL** badge.\n- **Hackathons**: Runner-up at UIET *'Brain and Bots'* & cleared internal screening round for **Smart India Hackathon**.\n\nProfile Links:\n- [LeetCode Profile (gaurav_usar)](https://leetcode.com/u/gaurav_usar/)\n- [Codolio Profile (gaurav_usar)](https://codolio.com/profile/gaurav_usar)`,
        suggestions: ["What is Gaurav's tech stack?", "Show university & education", "Contact Gaurav"],
        relevantProjects: [],
        timestamp: Date.now()
      });
    }

    if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('phone') || query.includes('reach')) {
      return NextResponse.json({
        response: `### **Get in Touch with Gaurav Kumar**\n\nGaurav is actively open for **Full-Stack Developer**, **Java / Spring Boot**, and **AI / GenAI Engineering** roles:\n\n- **Email**: [gaurav852799@gmail.com](mailto:gaurav852799@gmail.com)\n- **Phone**: [+91 8527994404](tel:+918527994404) (8527994404)\n- **Location**: New Delhi, India\n- **GitHub**: [github.com/gauravkr-usar](https://github.com/gauravkr-usar)\n- **LinkedIn**: [linkedin.com/in/gauravk001](https://www.linkedin.com/in/gauravk001/)\n- **LeetCode**: [leetcode.com/u/gaurav_usar](https://leetcode.com/u/gaurav_usar/)\n\nYou can also submit a direct inquiry in the **Contact** section!`,
        suggestions: ["Send a message", "Tell me about QueryDocs AI", "View certifications"],
        relevantProjects: [],
        timestamp: Date.now()
      });
    }

    return NextResponse.json({
      response: `Hello! I am Gaurav Kumar's AI Portfolio Assistant. I can tell you all about his:\n\n- **Java 21 & Spring Boot 3 & Microservices** background\n- **GenAI / RAG Platform (QueryDocs AI)** with Spring AI and pgvector\n- **Academic research under Dr. Ashish Joshi (SWVAS)** with OWASP ZAP\n- **Full-stack projects** (Next.js, React 19, MERN LMS, JustEat)\n- **500+ LeetCode DSA problem solutions** and certifications\n\nWhat would you like to explore?`,
      suggestions: ["Tell me about QueryDocs AI", "What is SWVAS?", "Show technical skills", "How to contact Gaurav?"],
      relevantProjects: ["swvas", "querydocs-ai"],
      timestamp: Date.now()
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 });
  }
}
