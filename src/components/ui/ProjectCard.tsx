"use client";

import React from "react";
import { BentoCard } from "@/components/ui/BentoGrid";
import {  ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export type ProjectPillar = {
  title: string;
  description: string;
};

export type ProjectLayoutType = "left-graphic" | "right-graphic" | "full";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  summary: string;
  pillars: ProjectPillar[];
  badges: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  layout?: ProjectLayoutType; // Keep prop so page.tsx doesn't break, but ignore it
  graphic: React.ReactNode;
  className?: string;
}

export const ProjectCard = ({
  title,
  subtitle,
  summary,
  pillars,
  badges,
  githubUrl = "#",
  liveDemoUrl,
  graphic,
  className,
}: ProjectCardProps) => {
  return (
    <BentoCard className={className}>
      <div className="flex flex-col w-full h-full p-2 md:p-6">
        {/* Graphic Panel - Reduced Height */}
        <div className="w-full h-48 md:h-56 mb-8 flex items-center justify-center relative overflow-hidden rounded-xl border border-white/5 bg-[#0D0D0D]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-primary)] to-[var(--bg-card)] opacity-50 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[var(--accent-amber)] rounded-full blur-[120px] opacity-10 pointer-events-none" />
          {graphic}
        </div>

        {/* Data Panel */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-sm font-sora font-semibold text-[var(--text-muted)] tracking-wider uppercase mb-2">
            {subtitle}
          </h3>
          <h2 className="text-2xl md:text-3xl font-sora font-bold text-[var(--text-primary)] mb-4">
            {title}
          </h2>
          <p className="text-[var(--text-muted)] font-sans leading-relaxed mb-6">
            {summary}
          </p>

          <ul className="space-y-4 mb-8">
            {pillars.map((pillar, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[var(--accent-amber)] mr-3 mt-1.5">•</span>
                <p className="text-sm font-sans text-[var(--text-muted)] leading-relaxed">
                  <strong className="text-[var(--text-primary)] font-semibold">
                    {pillar.title}:
                  </strong>{" "}
                  {pillar.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/5 text-[var(--text-muted)] text-xs rounded border border-white/5"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6 flex flex-wrap items-center gap-6">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-amber)] transition-colors"
            >
              <SiGithub className="w-4 h-4" />
              View Source Repository
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-amber)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </BentoCard>
  );
};
