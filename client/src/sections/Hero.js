import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const FLOATING_WORDS = [
  'React', 'Node.js', 'Python', 'AI', 'API',
  'Git', 'CSS', 'HTML', 'JSON', 'REST',
  'Automation', 'JavaScript', 'Express', 'Copilot', 'Cloud',
];

const Hero = () => {
  const { t } = useLanguage();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', () => { resize(); init(); });
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0c0a1e] to-[#030712]" />

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-700/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-900/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating tech words */}
      {FLOATING_WORDS.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.12, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6 + (i % 4),
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute font-mono text-xs text-indigo-400 pointer-events-none select-none"
          style={{
            left: `${5 + (i * 6.2) % 90}%`,
            top: `${10 + (i * 7.3) % 80}%`,
          }}
        >
          {word}
        </motion.span>
      ))}

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-5 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-7">
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-medium font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-black mb-5 leading-none tracking-tight"
        >
          <span className="text-white">{t.hero.greeting} </span>
          <span className="gradient-text">Sara Bastidas</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-2xl text-indigo-300 font-mono mb-6 tracking-wide"
        >
          {t.hero.role}
        </motion.p>

        {/* Headline */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-slate-200 font-semibold max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          {t.hero.headline}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('proyectos')}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
            </svg>
            <span className="relative z-10">{t.hero.btnProjects}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contacto')}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-slate-300 border border-white/10 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/10 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.hero.btnContact}
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center justify-center gap-10 flex-wrap"
        >
          {t.hero.stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black gradient-text">{value}</div>
              <div className="text-xs text-slate-600 mt-0.5 font-mono uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-slate-700 tracking-widest uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <span className="w-1 h-2 rounded-full bg-indigo-500 block" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
