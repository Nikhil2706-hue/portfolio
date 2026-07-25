'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-900/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC JOURNEY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Education <span className="text-gradient">Timeline</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            My academic progression and specialized engineering coursework.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {PORTFOLIO_DATA.education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>

              {/* Time Period Badge (Absolute on Left for desktop) */}
              <div className="hidden sm:block absolute -left-36 md:-left-44 top-2 text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-purple-400">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </span>
              </div>

              {/* Main Timeline Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="sm:hidden inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-900 text-xs font-mono text-purple-400 mb-2">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-purple-400 mt-1">
                      {item.institution}
                    </p>
                  </div>

                  {/* Score Pill */}
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 text-emerald-400 text-xs font-bold font-mono shadow-inner">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{item.score}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.details}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-800/60">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
