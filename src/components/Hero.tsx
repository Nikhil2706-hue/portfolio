'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Briefcase,
  FileText,
  Send,
  Github,
  Linkedin,
  Mail,
  Brain,
  Code,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PORTFOLIO_DATA.personal.subtitles;

  useEffect(() => {
    const targetText = roles[currentTextIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === targetText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? targetText.substring(0, displayText.length - 1)
            : targetText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-dark-950"
    >
      {/* Glow Orbs & Light Spills */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-mesh opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-8 shadow-lg shadow-purple-950/40 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>Final Year CSE (AI & ML) • Open for AI & Software Roles</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient hover:opacity-90 transition-opacity">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </motion.h1>

        {/* Typing Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-14 sm:h-12 flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 text-lg sm:text-2xl font-semibold text-slate-300 font-mono">
            <Terminal className="w-5 h-5 text-purple-400 shrink-0" />
            <span className="text-blue-400">{displayText}</span>
            <span className="w-2.5 h-6 bg-purple-500 animate-pulse ml-0.5" />
          </div>
        </motion.div>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10"
        >
          {PORTFOLIO_DATA.personal.bio}
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* View Projects */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Briefcase className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>View Projects</span>
          </a>

          {/* Download Resume */}
          <a
            href={PORTFOLIO_DATA.personal.contact.resumePdf}
            download="I_Nikhil_Reddy_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/50 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
          >
            <Send className="w-4 h-4 text-blue-400" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Quick Social Links & Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-slate-800/60"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-slate-800 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-slate-800 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.contact.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-pink-500/40 hover:bg-slate-800 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="hidden sm:block h-5 w-px bg-slate-800" />

          {/* Core Tech Stack Micro Badges */}
          <div className="flex items-center gap-2 flex-wrap justify-center text-xs text-slate-400 font-mono">
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-purple-400" /> Python & ML
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-blue-400" /> Next.js & React
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" /> SQL & TensorFlow
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-16 inline-flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="w-4 h-4 text-purple-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
