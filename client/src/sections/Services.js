import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const SERVICE_STYLES = [
  {
    icon: 'ICON_WEB',
    gradient: 'from-indigo-500/15 to-blue-600/8',
    border: 'hover:border-indigo-400/40',
    accentColor: '#6366f1',
    badge: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: 'ICON_GEAR',
    gradient: 'from-purple-500/15 to-violet-600/8',
    border: 'hover:border-purple-400/40',
    accentColor: '#a855f7',
    badge: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: 'ICON_BOT',
    gradient: 'from-emerald-500/15 to-teal-600/8',
    border: 'hover:border-emerald-400/40',
    accentColor: '#10b981',
    badge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: 'ICON_WRENCH',
    gradient: 'from-sky-500/15 to-cyan-600/8',
    border: 'hover:border-sky-400/40',
    accentColor: '#0ea5e9',
    badge: 'text-sky-300 bg-sky-500/10 border-sky-500/20',
  },
];

const SERVICE_ICONS = ['\u{1F310}', '\u2699\uFE0F', '\u{1F916}', '\u{1F527}'];

const Services = () => {
  const { t } = useLanguage();

  const services = SERVICE_STYLES.map((style, i) => ({
    ...style,
    icon: SERVICE_ICONS[i],
    title: t.services.items[i].title,
    subtitle: t.services.items[i].subtitle,
    description: t.services.items[i].description,
    features: t.services.items[i].features,
  }));

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="servicios" className="py-24 sm:py-28 px-5 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="section-tag">{t.services.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {t.services.title}{' '}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${service.gradient} border border-white/8 ${service.border} transition-all duration-300 overflow-hidden`}
            >
              <div
                className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono border"
                style={{ color: service.accentColor, borderColor: `${service.accentColor}30`, background: `${service.accentColor}10` }}
              >
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg"
                  style={{ background: `${service.accentColor}15`, border: `1px solid ${service.accentColor}20` }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-md border font-mono ${service.badge}`}>
                    {service.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-400">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${service.accentColor}15` }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke={service.accentColor} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 50px ${service.accentColor}08` }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 relative p-8 rounded-2xl overflow-hidden text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.08) 100%)',
            border: '1px solid rgba(99,102,241,0.2)',
          }}
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">{t.services.ctaTitle}</h3>
            <p className="text-slate-500 mb-6 text-sm">{t.services.ctaDesc}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
            >
              {t.services.ctaBtn}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;