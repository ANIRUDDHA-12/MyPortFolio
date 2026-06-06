"use client";

import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import { SkillsMatrix } from "@/components/ui/SkillsMatrix";
import { ProjectCard, ProjectPillar } from "@/components/ui/ProjectCard";
import { AntigravityTerminal } from "@/components/ui/AntigravityTerminal";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Database, Activity, Share2, Layers, Folder } from "lucide-react";

export default function Home() {
  const heroRoles = [
    "Full-Stack AI Engineer",
    "RAG Systems Builder",
    "LLM Pipeline Architect"
  ];
  const currentRole = useTypewriter(heroRoles, 80, 40, 2000);

  // Define projects
  const aegisPillars: ProjectPillar[] = [
    { title: "Hybrid Vector Engine", description: "Multi-vector RAG pipeline utilizing pgvector alongside BM25 keyword matching algorithms." },
    { title: "Asynchronous Queue Pipeline", description: "Task scheduling decoupled completely through BullMQ and Redis memory stores to ensure zero main-thread blocking." },
    { title: "Deterministic Guardrails", description: "Implemented rigid agentic validation layers to systematically eliminate model hallucinations before client delivery." },
    { title: "Sub-500ms Streaming", description: "Engineered native Server-Sent Events (SSE) token streaming to achieve ultra-fast edge latency." }
  ];

  const issueTrackerPillars: ProjectPillar[] = [
    { title: "Reactive Data Sync", description: "Real-time state synchronization across active clients driven by native Supabase WebSockets." },
    { title: "Vector Deduplication Engine", description: "Automated tracking cleanup utilizing pgvector and custom Postgres RPCs analyzing 384-dimensional textual embeddings." },
    { title: "Contextual AI Triage", description: "Integrated intelligent ticket sorting routing runtime analysis via localized RAG structures." }
  ];

  const skillBridgePillars: ProjectPillar[] = [
    { title: "Geospatial Proximity Engines", description: "Sub-kilometer location mapping executing raw PostGIS spatial bounding queries via ST_DWithin." },
    { title: "Secured Authentication Infrastructure", description: "Architected a zero-dependency, cost-optimized authentication engine leveraging Supabase Email OTP, entirely eliminating legacy third-party SMS delivery failure points." },
    { title: "Frictionless Escrow Workflows", description: "Implemented rigid multi-step transaction locks verified via automated doorstep PIN confirmations." }
  ];

  const AbstractTerminalGraphic = () => (
    <div className="w-11/12 h-3/4 max-w-[300px] bg-[#050505] rounded-lg border border-white/10 flex flex-col overflow-hidden shadow-2xl relative z-10 mx-auto">
      <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
      </div>
      <div className="p-3 font-mono text-[10px] text-green-400 space-y-2 opacity-80">
        <p>{">"} init retrieval</p>
        <p>{">"} dim: 1536</p>
        <p className="text-blue-400">{">"} BM25 loaded.</p>
        <p className="animate-pulse">_</p>
      </div>
    </div>
  );

  const AbstractGraphGraphic = () => (
    <div className="w-full h-full flex items-center justify-center relative z-10 min-h-[150px]">
      <div className="absolute w-[100px] h-[100px] border border-white/5 rounded-full flex items-center justify-center">
        <div className="w-[60px] h-[60px] border border-[var(--accent-amber)] opacity-30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
          <div className="w-2 h-2 bg-[var(--accent-amber)] rounded-full absolute -top-1"></div>
        </div>
      </div>
      <Share2 className="w-6 h-6 text-[var(--text-primary)] relative z-20" />
    </div>
  );

  const AbstractMobileGraphic = () => (
    <div className="w-24 h-40 sm:w-32 sm:h-48 bg-black rounded-2xl border-4 border-white/10 flex flex-col overflow-hidden shadow-2xl relative z-10 mx-auto mt-2">
      <div className="w-[40%] h-3 bg-white/10 mx-auto rounded-b-md"></div>
      <div className="flex-grow p-2 flex flex-col gap-2 mt-2">
        <div className="w-full h-10 bg-white/5 rounded-md flex items-center justify-center">
           <Activity className="w-4 h-4 text-[var(--accent-amber)]" />
        </div>
        <div className="w-3/4 h-2 bg-white/5 rounded-sm"></div>
        <div className="w-1/2 h-2 bg-white/5 rounded-sm"></div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full pb-20 pt-10">
      
      {/* Top Grid: Hero & Skills */}
      <BentoGrid>
        {/* Block 1: Hero Space */}
        <BentoCard className="col-span-1 md:col-span-2 row-span-1 flex flex-col justify-center p-8">
          <div className="space-y-4">
            <span className="font-dm-sans tracking-wide text-[var(--text-muted)] text-sm uppercase">
              Hi, I'm
            </span>
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-[var(--text-primary)] leading-[1.1]">
              Aniruddha Payas
            </h1>
            <div className="h-8">
              <h2 className="text-lg md:text-[24px] font-sora text-[var(--accent-amber)] flex items-center">
                {currentRole}
                <span className="w-3 h-6 ml-1 bg-[var(--accent-amber)] animate-[pulse_1s_infinite]"></span>
              </h2>
            </div>
            <p className="text-[var(--text-muted)] font-dm-sans leading-[1.8] max-w-lg text-sm mt-4">
              Architecting scalable web architectures, low-latency data structures, and highly optimized processing systems. I build intelligent infrastructure that doesn't just scale—it thinks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-5 py-2.5 bg-[var(--accent-amber)] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 font-sans text-xs">
                Explore Engineering Systems
              </button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-center bg-transparent border border-[var(--accent-amber)] text-[var(--accent-amber)] font-semibold rounded-full hover:bg-[var(--accent-amber)] hover:text-[#0A0A0A] transition-all duration-300 font-sans text-xs">
                Review Architecture Specs
              </a>
            </div>
          </div>
        </BentoCard>

        {/* Block 2: Technical Domain / Skills Matrix */}
        <BentoCard className="col-span-1 md:col-span-1 row-span-2 overflow-hidden flex flex-col">
          <SkillsMatrix />
        </BentoCard>

        {/* Analytics Placeholder */}
        <BentoCard className="col-span-1 md:col-span-1 row-span-1 flex flex-col">
          <h2 className="text-xs font-sora font-semibold text-[var(--accent-amber)] tracking-widest uppercase mb-2">
            Analytics
          </h2>
          <div className="flex-grow flex items-center justify-center border border-dashed border-white/10 rounded-lg">
             <Activity className="w-8 h-8 text-[var(--text-muted)] opacity-50" />
          </div>
        </BentoCard>

        {/* Core Agentic Terminal Engine */}
        <BentoCard id="terminal" className="col-span-1 md:col-span-1 row-span-1 flex flex-col">
          <h2 className="text-[var(--accent-amber)] font-sora font-semibold mb-4 flex items-center gap-2 text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-amber)] inline-block animate-pulse" />
            Terminal Engine
          </h2>
          <div className="bg-black/80 w-full flex-grow rounded-lg border border-white/5 p-4 font-mono text-xs text-[var(--text-muted)]">
            <p className="text-green-500">{'>'} ./init-agent.sh</p>
            <p className="mt-1 opacity-70">Agentic systems online.</p>
          </div>
        </BentoCard>
      </BentoGrid>

      {/* Independent About Section */}
      <section id="about" className="mt-24 mb-24 max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-sm font-sora font-bold text-[var(--accent-amber)] tracking-widest uppercase mb-6">
           ABOUT ME
        </h2>
        <div className="space-y-6 text-gray-200 font-family: 'Plus Jakarta Sans', sans-serif leading-relaxed text-base">
          <p>
            Hello! My Name is Aniruddha as you can see what is printed out through what I want to call my portfolio Website(Mine or Claude You Guess),Anyways as you can see I like to build things which stay on Internet,My Interest for Computer Science Started in High School Where I grew Fascinated Towards Creating A Single Page Application Describing The Strengths Of Iron Man 
            And Once I'd Created It Eager To Share It With My Friends ,Only Realising That The Things That Run On Local Host Dont Run Anywhere Else,Anyways I Figured How To Share It With Others And Here I Am.  
          </p>
        </div>
      </section>

      {/* Main Projects Section */}
      <section id="work" className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-12">
        <div className="flex flex-col gap-12">
          {/* Aegis AI */}
          <div className="w-full">
            <ProjectCard 
              title="Aegis AI: Enterprise Support Copilot"
              subtitle="Agentic Retrieval System"
              summary="A production-ready, low-latency AI Support Copilot engineered to automate retrieval from complex internal documentation using open-source LLM pipelines."
              pillars={aegisPillars}
              badges={["Next.js", "Node.js", "LangChain", "pgvector", "Redis", "BullMQ", "Groq API"]}
              githubUrl="https://github.com/ANIRUDDHA-12/copilot-with-semantic-guidelines"
              liveDemoUrl="https://copilot-with-semantic-guidelines.vercel.app"
              graphic={<AbstractTerminalGraphic />}
            />
          </div>

          {/* IssueTracker Pro */}
          <div className="w-full">
            <ProjectCard 
              title="IssueTracker Pro: Real-Time Management Fabric"
              subtitle="Distributed Event Platform"
              summary="Enterprise project management platform deploying instant sync systems, algorithmic issue deduplication, and automated triage pipelines."
              pillars={issueTrackerPillars}
              badges={["Next.js", "Supabase", "pgvector", "Hugging Face API", "Groq", "Tailwind CSS"]}
              githubUrl="https://github.com/ANIRUDDHA-12/IssueTrackerPro"
              liveDemoUrl="https://issue-tracker-pro-sigma.vercel.app/"
              graphic={<AbstractGraphGraphic />}
            />
          </div>

          {/* Skill-Bridge */}
          <div className="w-full">
            <ProjectCard 
              title="Skill-Bridge: Hyperlocal Services Marketplace"
              subtitle="Geospatial PWA"
              summary="Cross-platform mobile Progressive Web Application (PWA) facilitating localized transaction flows and optimized geographic search vectors."
              pillars={skillBridgePillars}
              badges={["React Native", "Expo", "PostGIS", "PostgreSQL", "Supabase Auth", "Redux Toolkit"]}
              githubUrl="https://github.com/ANIRUDDHA-12/Skill-Bridge"
              graphic={<AbstractMobileGraphic />}
            />
          </div>
        </div>
      </section>

      {/* Independent Other Projects Section */}
      <section className="mt-32 mb-20 max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-sora font-bold text-[var(--text-primary)] mb-8">
          Secondary Systems & Open Source
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#0D0D0D] border border-white/5 hover:border-[var(--accent-amber)] transition-colors rounded-xl p-6 flex flex-col">
            <Folder className="w-6 h-6 text-[var(--accent-amber)] mb-4" />
            <a href="https://github.com/ANIRUDDHA-12/ChurnGuard" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent-amber)] transition-colors cursor-pointer">
              <h3 className="text-lg font-sora font-bold mb-2">ChurnGuard</h3>
            </a>
            <p className="text-sm text-[var(--text-muted)] mb-4 flex-grow leading-relaxed">
              Customer churn prevention system using React, Node, and Python ML.
            </p>
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--accent-amber)] opacity-80">React • Node.js • Python</span>
          </div>

          <div className="bg-[#0D0D0D] border border-white/5 hover:border-[var(--accent-amber)] transition-colors rounded-xl p-6 flex flex-col">
            <Folder className="w-6 h-6 text-[var(--accent-amber)] mb-4" />
            <a href="https://github.com/ANIRUDDHA-12/DocuCloud-ai" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent-amber)] transition-colors cursor-pointer">
              <h3 className="text-lg font-sora font-bold mb-2">DocuCloud-Ai</h3>
            </a>
            <p className="text-sm text-[var(--text-muted)] mb-4 flex-grow leading-relaxed">
              Document And Reciept Analyser With Tax Calculation And Global Currency Support 
              For Conversion in Rupee
            </p>
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--accent-amber)] opacity-80">Next • Groq • JWT</span>
          </div>

          <div className="bg-[#0D0D0D] border border-white/5 hover:border-[var(--accent-amber)] transition-colors rounded-xl p-6 flex flex-col">
            <Folder className="w-6 h-6 text-[var(--accent-amber)] mb-4" />
            <a href="https://github.com/ANIRUDDHA-12/WorkFolio-Final" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent-amber)] transition-colors cursor-pointer">
              <h3 className="text-lg font-sora font-bold mb-2">WorkFolio</h3>
            </a>
            <p className="text-sm text-[var(--text-muted)] mb-4 flex-grow leading-relaxed">
              A Smart Assistant For Teachers with Attendance Capture,Salary Calculation,Whatsapp and Mail Based Updates and Scheduling Prediction
            </p>
            <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--accent-amber)] opacity-80">Angular</span>
          </div>
        </div>
      </section>

      {/* Interactive RAG Terminal */}
      <section className="max-w-5xl mx-auto mt-32 mb-32 px-4 md:px-8">
        <AntigravityTerminal />
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto mt-32 mb-24 px-4 md:px-8">
        <h2 className="text-sm font-sora font-bold text-[var(--accent-amber)] tracking-widest uppercase mb-6">
          04. INITIATE CONTACT
        </h2>
        <div className="bg-[#0D0D0D] p-10 md:p-12 border border-white/10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-8">
            
            {/* Left Column: Availability Status */}
            <div>
              <p className="text-[var(--text-muted)] text-sm mb-4">STATUS</p>
              <p className="text-lg text-[var(--text-primary)] font-dm-sans leading-relaxed">
                Currently open for  full-stack and AI engineering internships. Operating out of Ulhasnagar, Maharashtra. Available for immediate technical assessments, architectural interviews, and collaborative engineering cycles.
              </p>
            </div>

            {/* Right Column: Direct Comms */}
            <div className="flex flex-col gap-6">
              <p className="text-[var(--text-muted)] text-sm mb-4">COMMUNICATIONS</p>

              <div className="flex flex-col">
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">Email</span>
                <a 
                  href="mailto:payasaniruddhaxthc@gmail.com" 
                  className="text-2xl font-sora font-semibold text-white hover:text-[var(--accent-amber)] transition-colors break-all md:break-normal"
                >
                  payasaniruddhaxthc@gmail.com
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">Network</span>
                <a 
                  href="https://www.linkedin.com/in/aniruddha-payas-0a548b2a3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl font-sora font-semibold text-white hover:text-[var(--accent-amber)] transition-colors"
                >
                  LinkedIn Profile ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-transparent mt-12">
        <div className="max-w-7xl mx-auto py-8 px-6 md:px-12 flex flex-col md:flex-row gap-6 md:justify-between md:items-center">
          {/* Left Container: Signature & Stack */}
          <div className="flex flex-col gap-2">
            <p className="font-dm-sans text-sm text-[var(--text-muted)]">
              © {new Date().getFullYear()} Aniruddha Payas. All rights reserved.
            </p>
            <p className="font-dm-sans text-xs text-[var(--text-muted)] opacity-70">
               {/* Built with React, Tailwind CSS, & Framer Motion. */}
            </p>
          </div>

          {/* Right Container: System Status & Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-sora text-xs uppercase tracking-widest text-[var(--text-muted)]">
                System Online
              </span>
            </div>
            <a 
              href="#" 
              className="hover:text-[var(--accent-amber)] transition-colors text-sm font-semibold text-white"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
