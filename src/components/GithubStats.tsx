'use client';

import { motion } from 'framer-motion';
import { Github, GitCommit, GitPullRequest, Star, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function GithubStats() {
  const username = "Nikhil2706-hue";

  const languageBreakdown = [
    { name: "Python", percentage: 45, color: "bg-blue-500" },
    { name: "Jupyter / ML", percentage: 25, color: "bg-purple-500" },
    { name: "SQL & MySQL", percentage: 15, color: "bg-cyan-500" },
    { name: "TypeScript / JS", percentage: 10, color: "bg-pink-500" },
    { name: "HTML & CSS", percentage: 5, color: "bg-amber-500" },
  ];

  return (
    <section id="github" className="relative py-24 bg-dark-950/90 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono mb-4"
          >
            <Github className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & ACTIVITY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            GitHub <span className="text-gradient">Activity & Stats</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg"
          >
            Explore my code repositories, contribution trends, and top language distribution on GitHub.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Profile Card & Top Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] shadow-lg shadow-purple-600/30">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                    <Github className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">@{username}</h3>
                  <a
                    href={PORTFOLIO_DATA.personal.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-purple-400 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>View GitHub Profile</span>
                    <Terminal className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
                Top Languages & Tech Distribution
              </h4>

              <div className="space-y-4 mb-6">
                {languageBreakdown.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-200">{lang.name}</span>
                      <span className="text-slate-400 font-mono">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className={`h-full ${lang.color} rounded-full`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-around text-center">
              <div>
                <span className="text-2xl font-extrabold text-white">15+</span>
                <p className="text-xs font-mono text-slate-400 mt-0.5">Repositories</p>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="text-2xl font-extrabold text-white">200+</span>
                <p className="text-xs font-mono text-slate-400 mt-0.5">Commits</p>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="text-2xl font-extrabold text-white">6+</span>
                <p className="text-xs font-mono text-slate-400 mt-0.5">AI Models</p>
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats Cards & Contribution Widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Dynamic GitHub Readme Stats Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span>GitHub Performance Summary</span>
              </h4>
              <div className="w-full overflow-hidden rounded-xl bg-slate-950 p-2 border border-slate-800 flex items-center justify-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=030712&hide_border=true&title_color=3b82f6&icon_color=8b5cf6&text_color=9ca3af`}
                  alt="GitHub Stats"
                  className="w-full max-w-lg object-contain"
                  onError={(e) => {
                    // Fallback visual if API is blocked in offline mode
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Contribution Activity Visualizer */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <GitCommit className="w-4 h-4 text-purple-400" />
                  <span>Recent Contribution Activity</span>
                </h4>

                {/* Simulated GitHub Contribution Grid Mesh */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="grid grid-cols-12 sm:grid-cols-24 gap-1.5">
                    {Array.from({ length: 96 }).map((_, i) => {
                      const intensities = [
                        'bg-slate-900',
                        'bg-slate-900',
                        'bg-purple-950/80',
                        'bg-purple-900/80 border border-purple-500/30',
                        'bg-purple-600/90 shadow-sm shadow-purple-500/40',
                        'bg-blue-500 shadow-sm shadow-blue-500/50',
                      ];
                      const level = (i * 7 + 13) % intensities.length;
                      return (
                        <div
                          key={i}
                          className={`h-3 w-full rounded-sm ${intensities[level]}`}
                          title="Active Contribution"
                        />
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Less</span>
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-sm bg-slate-900" />
                      <span className="w-2.5 h-2.5 rounded-sm bg-purple-950" />
                      <span className="w-2.5 h-2.5 rounded-sm bg-purple-700" />
                      <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <GitPullRequest className="w-3.5 h-3.5 text-blue-400" /> Continuous Development
                </span>
                <a
                  href={PORTFOLIO_DATA.personal.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  Visit Repository Hub →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
