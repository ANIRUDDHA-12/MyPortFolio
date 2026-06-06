"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 md:px-8 py-12",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps extends HTMLMotionProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

export const BentoCard = ({ className, children, ...props }: BentoCardProps) => {
  return (
    <motion.div
      className={cn(
        "bg-[var(--bg-card)] border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-colors duration-300",
        className
      )}
      whileHover={{
        y: -4,
        boxShadow: "0 10px 30px -10px var(--accent-amber-glow)",
        borderColor: "rgba(245, 158, 11, 0.4)",
        ...((props.whileHover as any) || {}),
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
