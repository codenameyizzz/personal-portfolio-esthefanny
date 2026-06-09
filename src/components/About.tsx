/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.28 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-6xl scroll-mt-28 rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-xl sm:px-8 sm:py-7"
    >
      <h2 className="flex items-center gap-3 text-[1.7rem] font-normal tracking-tight text-white">
        <User size={22} />
        About Me
      </h2>

      <div className="my-6 h-px w-full bg-white/10" />

      <div className="max-w-4xl space-y-5 text-base leading-7 text-white/68">
        <p>Hi, I&apos;m Esthefany.</p>
        <p>{PERSONAL_INFO.longBio}</p>
        <p>
          I have worked on several academic and practical software projects, especially in building web-based systems that combine interface design, application logic, and database-backed features.
        </p>
        <p>
          My current focus is to continue improving my full-stack development capability through projects using Laravel, React.js, MySQL, and related development tools.
        </p>
      </div>
    </motion.section>
  );
}
