import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { href: '#inicio', label: t.nav.inicio },
    { href: '#sobre-mi', label: t.nav.sobreMi },
    { href: '#habilidades', label: t.nav.habilidades },
    { href: '#proyectos', label: t.nav.proyectos },
    { href: '#servicios', label: t.nav.servicios },
    { href: '#contacto', label: t.nav.contacto },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = navLinks.map((l) => l.href.substring(1));
      let current = 'inicio';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => scrollTo(e, '#inicio')}
            className="flex items-center gap-2 group"
          >
            <span className="text-xl font-bold font-mono gradient-text tracking-tight">
              {'<SB />'}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-300'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <a
            href="#contacto"
            onClick={(e) => scrollTo(e, '#contacto')}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/20"
          >
            {t.nav.hireMe}
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono border border-white/10 text-slate-400 hover:border-indigo-500/40 hover:text-indigo-400 hover:bg-indigo-500/8 transition-all duration-200"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-indigo-400' : 'text-slate-600'}>EN</span>
            <span className="text-slate-700">/</span>
            <span className={lang === 'es' ? 'text-indigo-400' : 'text-slate-600'}>ES</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-slate-300 origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-slate-300"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-slate-300 origin-center transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#080d18]/95 backdrop-blur-xl border-b border-white/5"
          >
            <nav className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'text-indigo-300 bg-indigo-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => scrollTo(e, '#contacto')}
                className="block mt-3 px-4 py-3 rounded-xl text-sm font-semibold text-center text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                Hire Me
              </a>
            </nav>
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLang}
              className="mt-1 mx-4 mb-3 px-4 py-2.5 rounded-xl text-sm font-bold font-mono border border-white/8 text-slate-400 hover:border-indigo-500/30 hover:text-indigo-400 transition-all text-center"
            >
              {lang === 'en' ? '🌐 Switch to Español' : '🌐 Switch to English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
