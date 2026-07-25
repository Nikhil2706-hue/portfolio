'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-dark-950/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

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
            <Award className="w-3.5 h-3.5" />
            <span>HONORS & CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Certifications & <span className="text-gradient">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Verified industry certifications, academic distinctions, and research publications.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <span>Industry Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-purple-400">
                      <Award className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h4>

                  <p className="text-xs font-mono text-purple-400 mb-4">
                    Issued by {cert.issuer}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {cert.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" />
            <span>Key Academic & Research Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between bg-gradient-to-b from-slate-900/60 to-slate-950/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-pink-400">
                      {item.tag}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1 text-xs text-purple-400 font-mono">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Academic Recognition</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
