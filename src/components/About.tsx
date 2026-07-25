'use client';

import { motion } from 'framer-motion';
import { User, GraduationCap, Award, Brain, Code2, Zap, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function About() {
  const highlights = [
    "Final-year B.Tech CSE (AI & ML) student at Vel Tech University, Chennai.",
    "Strong foundation in Artificial Intelligence, Machine Learning & Deep Learning (LSTM, CNN).",
    "Proficient in Python, SQL, Java, C, Data Structures & Relational Databases (MySQL).",
    "Hands-on expertise building Web Applications (React, Next.js 15, Tailwind CSS).",
    "Quick learner, adaptable team player, and passionate technical problem solver."
  ];

  return (
    <section id="about" className="relative py-24 bg-dark-950/80 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & PROFILE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            A glimpse into my academic background, technical focus, and passion for artificial intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {PORTFOLIO_DATA.personal.fullName}
                  </h3>
                  <p className="text-sm text-purple-400 font-mono">
                    Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {PORTFOLIO_DATA.personal.aboutDetailed.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                Core Strengths & Highlights
              </h4>

              <div className="space-y-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Brain className="w-4 h-4 text-purple-400" /> Artificial Intelligence
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Zap className="w-4 h-4 text-blue-400" /> Machine Learning
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Code2 className="w-4 h-4 text-pink-400" /> Web Engineering
              </span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, translateY: -4 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div className="p-3 w-fit rounded-xl bg-slate-900 border border-slate-800 text-purple-400 group-hover:border-purple-500/40 transition-colors">
                  {idx === 0 ? (
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  ) : idx === 1 ? (
                    <Code2 className="w-6 h-6 text-purple-400" />
                  ) : idx === 2 ? (
                    <Award className="w-6 h-6 text-pink-400" />
                  ) : (
                    <Zap className="w-6 h-6 text-emerald-400" />
                  )}
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-lg font-bold text-purple-400">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Quick Contact Highlight Card */}
            <div className="col-span-2 glass-card p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-purple-950/40 border border-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">Looking for an AI / Software Intern or Developer?</h4>
                  <p className="text-xs text-slate-400 mt-1">Available for immediate hiring and technical opportunities.</p>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 whitespace-nowrap"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
