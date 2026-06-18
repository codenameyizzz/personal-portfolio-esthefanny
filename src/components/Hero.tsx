/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Mail, MapPin, Sparkles } from 'lucide-react';
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

  const initials = PERSONAL_INFO.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

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
      <div className="relative overflow-hidden rounded-[34px] border border-rose-200/80 bg-white/70 shadow-[0_32px_90px_rgba(244,114,182,0.1)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,207,232,0.45),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,245,247,0.82))]" />
        <div className="absolute left-[12%] top-[8%] h-32 w-32 rounded-full bg-rose-200/50 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-40 w-40 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute bottom-[8%] left-1/2 h-32 w-56 -translate-x-1/2 rounded-full bg-pink-100/60 blur-3xl" />

        <div className="relative grid min-h-[calc(100vh-8.5rem)] items-center gap-12 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="order-2 max-w-3xl text-center lg:order-1 lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/72 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-rose-700/80">
              <Sparkles size={14} className="text-rose-400" />
              Soft Pink Portfolio
            </div>

            <h1 className="mt-6 text-5xl font-medium tracking-[-0.09em] text-rose-950 sm:text-7xl md:text-8xl">
              Esthefany Christin Sipahutar
            </h1>
            <h2 className="mt-4 text-xl font-normal tracking-tight text-rose-900/80 sm:text-3xl">
              Student at Undergraduate Program in Software Engineering, Institut Teknologi Del
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-rose-950/68 sm:text-xl sm:leading-8">
              First-year Applied Software Engineering (D4) student with experience in software
              development projects, currently strengthening full-stack skills with Laravel and
              React.js.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-white/65 px-6 py-3 text-base font-medium text-rose-900 transition-all hover:bg-white/88"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-300 via-pink-300 to-amber-100 px-6 py-3 text-base font-medium text-rose-950 shadow-[0_14px_34px_rgba(244,114,182,0.14)] transition-all hover:brightness-105"
              >
                Projects
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/72 px-4 py-2 text-sm text-rose-800/75">
                <MapPin size={14} className="text-rose-400" />
                {PERSONAL_INFO.location}
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white/68 text-rose-700 transition-all hover:bg-rose-50 hover:text-rose-900"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
            className="order-1 mx-auto w-full max-w-sm lg:order-2"
          >
            <div className="rounded-[30px] border border-rose-200/80 bg-white/75 p-4 shadow-[0_26px_70px_rgba(244,114,182,0.12)] backdrop-blur-2xl">
              <div className="rounded-[26px] border border-rose-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,244,247,0.92))] p-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-rose-100 bg-[radial-gradient(circle_at_top,rgba(251,207,232,0.55),transparent_32%),linear-gradient(180deg,#fffdfd_0%,#fff5f7_55%,#fdeef3_100%)]">
                  {PERSONAL_INFO.avatarUrl ? (
                    <img
                      src={PERSONAL_INFO.avatarUrl}
                      alt={PERSONAL_INFO.name}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-rose-200 bg-white/86 text-3xl font-medium tracking-[-0.08em] text-rose-700 shadow-[0_10px_30px_rgba(244,114,182,0.08)]">
                        {initials}
                      </div>
                      <p className="mt-6 text-sm uppercase tracking-[0.28em] text-rose-500/80">
                        Photo Placeholder
                      </p>
                      <p className="mt-3 max-w-xs text-sm leading-6 text-rose-900/62">
                        Letakkan foto portrait formal atau semi-formal Anda di sini untuk memberi
                        first impression yang lebih personal dan profesional.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 rounded-[20px] border border-rose-100 bg-white/76 px-4 py-4">
                  {/* <p className="text-xs uppercase tracking-[0.26em] text-rose-500/80">
                    Portrait Feature
                  </p> */}
                  {/* <p className="mt-2 text-sm leading-6 text-rose-900/68">
                    Foto Anda diletakkan langsung di hero section supaya terlihat pada first fold
                    dan memperkuat personal branding sejak halaman pertama dibuka.
                  </p> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
