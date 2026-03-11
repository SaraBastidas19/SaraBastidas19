import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HIGHLIGHT_STYLES = [
  { emoji: '\u{1F9E0}', color: 'from-indigo-500/10 to-purple-500/10', border: 'hover:border-indigo-500/40', dot: 'bg-indigo-400' },
  { emoji: '\u26A1', color: 'from-sky-500/10 to-cyan-500/10', border: 'hover:border-sky-500/40', dot: 'bg-sky-400' },
  { emoji: '\u{1F527}', color: 'from-emerald-500/10 to-teal-500/10', border: 'hover:border-emerald-500/40', dot: 'bg-emerald-400' },
  { emoji: '\u{1F4C8}', color: 'from-orange-500/10 to-amber-500/10', border: 'hover:border-orange-500/40', dot: 'bg-orange-400' },
];

const About = () => {
  const { t } = useLanguage();
  const highlights = HIGHLIGHT_STYLES.map((s, i) => ({ ...s, ...t.about.highlights[i] }));

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="sobre-mi" className="py-24 sm:py-28 px-5 bg-[#060b14] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="section-tag">{t.about.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {t.about.title}{' '}
            <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-indigo-500/30">
                SB
              </div>
              <div>
                <div className="text-white font-bold text-lg">Sara Bastidas</div>
                <div className="text-slate-500 text-sm font-mono">{t.about.role}</div>
              </div>
            </div>

            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p className="text-slate-300 text-lg font-medium leading-relaxed">{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>
                {t.about.p3a}{' '}
                <span className="text-indigo-400 font-medium">Cursor</span>{' '}
                {t.about.p3b}{' '}
                <span className="text-indigo-400 font-medium">GitHub Copilot</span>
                {t.about.p3c}
              </p>
              <p>{t.about.p4}</p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-4 font-mono">
                {t.about.interestsLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 text-sm rounded-xl bg-indigo-500/8 border border-indigo-500/15 text-indigo-300 font-medium hover:border-indigo-400/30 hover:bg-indigo-500/12 transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t.about.cta}
            </motion.button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 grid grid-cols-1 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={`group p-5 rounded-2xl bg-gradient-to-br ${item.color} border border-white/8 ${item.border} transition-all duration-300 cursor-default`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 mt-0.5">{item.emoji}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;