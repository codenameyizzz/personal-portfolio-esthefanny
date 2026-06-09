/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS, PROJECTS } from '../data';

export default function ExtraAndReviews() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]"
    >
      <div className="rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-7 backdrop-blur-xl sm:px-8">
        <p className="text-sm uppercase tracking-[0.22em] text-white/45">snapshot</p>
        <h2 className="mt-2 text-4xl font-normal tracking-tight text-white sm:text-5xl">
          Profile Summary
        </h2>

        <div className="mt-8 space-y-4">
          {CERTIFICATIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
              className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/58">{item.issuer}</p>
              <p className="mt-1 text-sm text-white/45">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-7 backdrop-blur-xl sm:px-8">
        <p className="text-sm uppercase tracking-[0.22em] text-white/45">focus</p>
        <h2 className="mt-2 text-4xl font-normal tracking-tight text-white sm:text-5xl">
          Project Strengths
        </h2>

        <div className="mt-8 space-y-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
              className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
            >
              <h3 className="text-lg font-medium text-white">{project.title}</h3>
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-3 space-y-2 text-sm leading-6 text-white/62">
                  {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>• {highlight}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
