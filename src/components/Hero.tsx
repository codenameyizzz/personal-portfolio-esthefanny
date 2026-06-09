/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const socialLinks = [
    PERSONAL_INFO.github
      ? { icon: <Github size={16} />, url: PERSONAL_INFO.github, label: 'GitHub' }
      : null,
    PERSONAL_INFO.email
      ? { icon: <Mail size={16} />, url: `mailto:${PERSONAL_INFO.email}`, label: 'Email' }
      : null,
  ].filter(Boolean) as Array<{ icon: React.ReactNode; url: string; label: string }>;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 110,
      behavior: 'smooth',
    });
  };

  return (
    <section id="hero" className="mx-auto max-w-6xl">
      <div className="relative min-h-[calc(100vh-8.5rem)] overflow-hidden rounded-[30px] border border-rose-200/75 bg-white/62 shadow-[0_28px_80px_rgba(244,114,182,0.16)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.26),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,240,247,0.68))]" />
        <div className="absolute left-1/2 top-[10%] h-72 w-72 -translate-x-1/2 rounded-full bg-pink-300/40 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/65 to-transparent" />

        <div className="relative grid min-h-[calc(100vh-8.5rem)] place-items-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-4xl text-center"
          >
            <h1 className="text-5xl font-medium tracking-[-0.09em] text-rose-950 sm:text-7xl md:text-8xl">
              Esthefany Christin Sipahutar
            </h1>
            <h2 className="mt-3 text-xl font-normal tracking-tight text-rose-900/82 sm:text-3xl">
              Student at Undergraduate Program in Software Engineering, Institut Teknologi Del
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-rose-950/68 sm:text-xl sm:leading-8">
              First-year Applied Software Engineering (D4) student with experience in software
              development projects, currently strengthening full-stack skills with Laravel and
              React.js.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-white/55 px-6 py-3 text-base font-medium text-rose-900 transition-all hover:bg-white/80"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-400 px-6 py-3 text-base font-medium text-white shadow-[0_14px_35px_rgba(236,72,153,0.28)] transition-all hover:brightness-105"
              >
                Projects
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white/65 text-pink-700 transition-all hover:bg-pink-100 hover:text-pink-800"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
