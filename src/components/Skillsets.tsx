/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../data';

const groups = [
  { id: 'languages', title: 'Programming Languages' },
  { id: 'frameworks', title: 'Frameworks & Runtime' },
  { id: 'databases', title: 'Databases' },
  { id: 'tools', title: 'Tools & Miscellaneous' },
] as const;

export default function Skillsets() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-6xl scroll-mt-28 rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-7 backdrop-blur-xl sm:px-8"
    >
      <p className="text-sm uppercase tracking-[0.22em] text-white/45">skills</p>
      <h2 className="mt-2 text-4xl font-normal tracking-tight text-white sm:text-5xl">
        Technical Skills
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
            className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
          >
            <h3 className="text-lg font-medium tracking-tight text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {SKILLS.filter((skill) => skill.category === group.id).map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-white/65"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
