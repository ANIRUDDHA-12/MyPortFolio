"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  X as XIcon, Menu } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons"
// import { type SiLinkedin } from '@icons-pack/react-simple-icons'
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Terminal", href: "#terminal" },
  { name: "Work", href: "#work" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(link.name);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-x-hidden">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full h-[70px] z-50 transition-all duration-300 flex items-center px-6 md:px-12",
          scrolled ? "bg-black/60 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="flex w-full max-w-7xl mx-auto items-center justify-between">
          {/* Logo */}
          <div className="font-sora uppercase tracking-[0.2em] text-[var(--accent-amber)] font-bold text-xl">
            Aniruddha
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-[var(--accent-amber)]",
                  activeSection === link.name ? "text-[var(--accent-amber)]" : "text-[var(--text-muted)]"
                )}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)]"
                  />
                )}
              </a>
            ))}
            <button className="relative overflow-hidden border border-[var(--accent-amber)] text-[var(--accent-amber)] px-5 py-2 rounded-md text-sm font-medium transition-all group">
              <span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-300"><a href="/resume.pdf" target="blank" rel="noopener noreferrer">Resume</a></span>
              <div className="absolute inset-0 bg-[var(--accent-amber)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--text-primary)] hover:text-[var(--accent-amber)] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[var(--bg-primary)] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-[var(--text-primary)] hover:text-[var(--accent-amber)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* <X className="w-8 h-8" />  */}
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sora text-3xl font-semibold tracking-wide text-[var(--text-primary)] hover:text-[var(--accent-amber)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-8 border border-[var(--accent-amber)] text-[var(--accent-amber)] px-8 py-3 rounded-md text-lg font-medium hover:bg-[var(--accent-amber)] hover:text-[#0A0A0A] transition-all">
                Resume
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Sidebar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6"
      >
        <a href="https://github.com/ANIRUDDHA-12" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors">
          <SiGithub className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/aniruddha-payas-0a548b2a3" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors">
          {/* <SiLinkedin className="w-5 h-5" /> */}
          <p className="w-5 h-5">L</p>
        </a>
<a href="#" className="text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors">
  <SiX className="w-5 h-5" />
</a>
        <div className="w-[2px] h-[60px] bg-[var(--accent-amber)] rounded-t-full" />
      </motion.div>

      {/* Right Sidebar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed right-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6"
      >
        <a
          href="mailto:payasaniruddhaxthc@gmail.com"
          className="text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors text-sm font-sans tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          payasaniruddhaxthc@gmail.com
        </a>
        <div className="w-[2px] h-[60px] bg-[var(--accent-amber)] rounded-t-full mt-2" />
      </motion.div>

      {/* Main Content */}
      <main className="pt-[70px]">{children}</main>
    </div>
  );
}
