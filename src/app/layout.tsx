import type { Metadata } from "next";
import { Layout } from "@/components/layout/Layout";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniruddha Payas | Full-Stack AI Engineer Portfolio",
  description: "Explore specialized RAG engineering systems, distributed backend architectures, and production-ready applications built by Aniruddha Payas.",
  keywords: "AI Engineer, Full-Stack Developer, RAG Architecture, React, Next.js, pgvector, BullMQ, Supabase, PostGIS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aniruddha Sanjay Payas",
    "jobTitle": "Full-Stack AI Engineer",
    "knowsAbout": ["React", "Next.js", "Node.js", "Vector Databases", "pgvector", "RAG", "Data Structures & Algorithms"]
  };

  return (
    <html lang="en" className="dark">
      <body className="antialiased relative min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AmbientBackground />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
