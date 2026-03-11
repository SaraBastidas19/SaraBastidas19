import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const PROJECT_STYLES = [
  {
    id: 1,
    tags: ['React', 'Node.js', 'CSS', 'REST API'],
    category: 'Web Dev',
    gradient: 'from-indigo-500/20 to-blue-600/10',
    border: 'hover:border-indigo-500/40',
    accent: 'text-indigo-400',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    icon: 'ICON_CAMP',
    status: 'Live',
  },
  {
    id: 2,
    tags: ['Node.js', 'APIs', 'Automation', 'Webhooks'],
    category: 'Automation',
    gradient: 'from-purple-500/20 to-pink-600/10',
    border: 'hover:border-purple-500/40',
    accent: 'text-purple-400',
    github: 'https://github.com/',
    demo: null,
    icon: 'ICON_GEAR',
    status: 'In Progress',
  },
  {
    id: 3,
    tags: ['AI', 'Node.js', 'NLP', 'Express'],
    category: 'AI',
    gradient: 'from-emerald-500/20 to-teal-600/10',
    border: 'hover:border-emerald-500/40',
    accent: 'text-emerald-400',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    icon: 'ICON_BOT',
    status: 'Live',
  },
  {
    id: 4,
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Framer Motion'],
    category: 'Web Dev',
    gradient: 'from-sky-500/20 to-cyan-600/10',
    border: 'hover:border-sky-500/40',
    accent: 'text-sky-400',
    github: 'https://github.com/',
    demo: null,
    icon: 'ICON_BRIEF',
    status: 'Live',
  },
];

const PROJECT_ICONS = ['\u{1F3D5}\uFE0F', '\u2699\uFE0F', '\u{1F916}', '\u{1F4BC}'];
const FILTER_CATEGORIES = ['All', 'Web Dev', 'Automation', 'AI'];

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilterIdx, setActiveFilterIdx] = useState(0);

  const projects = PROJECT_STYLES.map((style, i) => ({
    ...style,
    icon: PROJECT_ICONS[i],
    title: t.projects.items[i].title,
    description: t.projects.items[i].description,
    statusLabel: style.status === 'Live' ? t.projects.statusLive : t.projects.statusProgress,
  }));

  const activeCategory = FILTER_CATEGORIES[activeFilterIdx];
  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <section id="proyectos" className="py-24 sm:py-28 px-5 bg-[#060b14] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="section-tag">{t.projects.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">{t.projects.subtitle}</p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {t.projects.filters.map((label, idx) => (
            <button
              key={label}
              onClick={() => setActiveFilterIdx(idx)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeFilterIdx === idx
                  ? 'text-white bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-500/20'
                  : 'text-slate-500 bg-white/3 border-white/8 hover:border-white/15 hover:text-slate-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                className={`group relative p-7 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/8 ${project.border} transition-all duration-300 overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="text-3xl">{project.icon}</span>
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${
                      project.status === 'Live'
                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                        : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                    }`}
                  >
                    {project.statusLabel}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/8 text-slate-400 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${project.accent} hover:opacity-80 transition-opacity`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      {t.projects.githubLink}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {t.projects.demoLink}
                    </a>
                  )}
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-500 text-sm hover:border-indigo-500/30 hover:text-indigo-400 transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            {t.projects.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;