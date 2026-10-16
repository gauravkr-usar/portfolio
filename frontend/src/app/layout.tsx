import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Kumar | Full-Stack Developer & AI Systems Engineer",
  description: "Portfolio of Gaurav Kumar — Java 21, Spring Boot 3, Spring AI, pgvector RAG pipelines, microservices, React 19, and Next.js. Final-year B.Tech AI/ML at USAR (GGSIPU), Delhi.",
  keywords: [
    "Gaurav Kumar",
    "Full-Stack Developer",
    "Java 21",
    "Spring Boot 3",
    "Spring AI",
    "pgvector",
    "RAG",
    "React 19",
    "Next.js",
    "USAR GGSIPU",
    "OWASP ZAP",
    "Microservices",
    "LeetCode 1580+"
  ],
  authors: [{ name: "Gaurav Kumar", url: "https://github.com/gauravkr-usar" }],
  openGraph: {
    title: "Gaurav Kumar | Full-Stack Developer & AI Systems Engineer",
    description: "Java 21, Spring Boot 3, Spring AI, pgvector RAG architectures & Next.js full-stack systems.",
    url: "https://github.com/gauravkr-usar",
    siteName: "Gaurav Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
