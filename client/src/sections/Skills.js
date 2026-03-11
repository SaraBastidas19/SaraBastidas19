import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const CATEGORY_STYLES = [
  {
    icon: 'ICON_WEB',
    color: 'indigo',
    gradient: 'from-indigo-500/15 to-blue-500/10',
    border: 'border-indigo-500/20 hover:border-indigo-400/40',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    skillLevels: [85, 82, 90, 95, 80],
  },
  {
    icon: 'ICON_AI',
    color: 'purple',
    gradient: 'from-purple-500/15 to-pink-500/10',
    border: 'border-purple-500/20 hover:border-purple-400/40',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    skillLevels: [88, 80, 75, 78],
  },
  {
    icon: 'ICON_TOOLS',
    color: 'sky',
    gradient: 'from-sky-500/15 to-cyan-500/10',
    border: 'border-sky-500/20 hover:border-sky-400/40',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    skillLevels: [90, 85, 88, 82],
  },
  {
    icon: 'ICON_SOFT',
    color: 'emerald',
    gradient: 'from-emerald-500/15 to-teal-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-400/40',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    skillLevels: [95, 90, 95, 88],
  },
];

const CATEGORY_ICONS = ['\u{1F310}', '\u{1F916}', '\u{1F6E0}\uFE0F', '\u{1F4A1}'];

const colorMap = {
  indigo: '#6366f1',
  purple: '#a855f7',
  sky: '#0ea5e9',
  emerald: '#10b981',
};

const SkillBar = ({ name, level, color }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm text-slate-300 font-medium">{name}</span>
      <span className="text-xs text-slate-600 font-mono">{level}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="h-full rounded-full"
        style={{ backgroundColor: colorMap[color] }}
      />
    </div>
  </div>
);

const ALSO_FAMILIAR = ['Python', 'SQL', 'MongoDB', 'Docker', 'Tailwind CSS', 'Figma', 'VS Code', 'Postman'];

const Skills = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillCategories = CATEGORY_STYLES.map((style, i) => ({
    ...style,
    icon: CATEGORY_ICONS[i],
    title: t.skills.categories[i].title,
    skills: t.skills.categories[i].skills.map((name, j) => ({
      name,
      level: style.skillLevels[j] || 80,
    })),
  }));

  return (
    <section id="habilidades" className="py-24 sm:py-28 px-5 bg-[#030712] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-900/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="section-tag">{t.skills.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {t.skills.title}{' '}
            <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">{t.skills.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${cat.gradient} border ${cat.border} transition-all duration-300 overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ boxShadow: `inset 0 0 40px ${colorMap[cat.color]}15` }}
              />
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">{cat.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-sm">{cat.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-md border font-mono ${cat.badge}`}>
                    {cat.skills.length} skills
                  </span>
                </div>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={cat.color} />
              ))}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-mono text-slate-700 uppercase tracking-widest mb-6">{t.skills.alsoLabel}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {ALSO_FAMILIAR.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-white/3 border border-white/8 text-slate-500 text-sm font-medium hover:border-white/15 hover:text-slate-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;