'use client';

import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Resume & <span className="text-gradient">Credentials</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Download my updated PDF resume or review key qualification summaries below.
          </motion.p>
        </div>

        {/* Resume Preview Banner Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-grid-mesh opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-purple-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>UPDATED RESUME (PDF)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {PORTFOLIO_DATA.personal.fullName}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                B.Tech in Computer Science & Engineering (AI & ML) • Vel Tech University, Chennai.
                Passionate about Machine Learning, Data Science, Python development, and Full Stack Web Engineering.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> CGPA: 8.01 / 10
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Cisco CCNA 1 Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Infosys ML Certified
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
              <a
                href={PORTFOLIO_DATA.personal.contact.resumePdf}
                download="I_Nikhil_Reddy_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume PDF</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.contact.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all"
              >
                <span>Preview Document</span>
                <ExternalLink className="w-4 h-4 text-purple-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
