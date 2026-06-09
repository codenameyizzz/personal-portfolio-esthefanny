/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.28 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-6xl scroll-mt-28 rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-7 backdrop-blur-xl sm:px-8"
    >
      <p className="text-sm uppercase tracking-[0.22em] text-white/45">education</p>
      <h2 className="mt-2 text-4xl font-normal tracking-tight text-white sm:text-5xl">
        Academic Background
      </h2>

      <div className="mt-8 space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-medium tracking-tight text-white">{experience.company}</h3>
            <p className="mt-1 text-sm text-white/55">
              {experience.role}
            </p>
            <p className="mt-1 text-sm text-white/48">
              {experience.location} • {experience.period}
            </p>
            <p className="mt-3 text-base leading-7 text-white/66">{experience.description}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-white/62">
              {experience.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>• {bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
