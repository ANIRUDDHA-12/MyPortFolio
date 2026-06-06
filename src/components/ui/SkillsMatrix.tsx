"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages & Core Systems",
    skills: ["TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    category: "Frontend Engineering",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite", "Redux", "State Management"],
  },
  {
    category: "Distributed Backend",
    skills: ["Node.js", "Express", "Redis", "BullMQ async queues", "RESTful Architectures"],
  },
  {
    category: "AI/ML Systems & Agents",
    skills: ["LangChain", "LangSmith", "Agentic AI Workflows", "Dense Retrieval (RAG)", "pgvector"],
  },
  {
    category: "Databases & Cloud Fabric",
    skills: ["PostgreSQL", "Neon Serverless", "PostGIS", "Docker Containers", "Vercel", "Git Pipelines"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export const SkillsMatrix = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {skillsData.map((group, index) => (
        <div key={index} className="flex flex-col">
          <h3 className="text-[10px] uppercase tracking-widest text-[var(--accent-amber)] mb-3 font-semibold">
            {group.category}
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap gap-2"
          >
            {group.skills.map((skill, sIndex) => (
              <motion.div
                key={sIndex}
                variants={itemVariants}
                className="bg-[#0A0A0A] border border-white/5 rounded-sm px-2 py-1 text-xs font-medium text-[#FCD34D] shadow-sm whitespace-nowrap"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
