/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-6xl scroll-mt-28"
    >
      <div className="mb-5 px-1">
        <p className="text-sm uppercase tracking-[0.22em] text-rose-700/65">portfolio</p>
        <h2 className="mt-2 text-4xl font-normal tracking-tight text-rose-950 sm:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-rose-950/70">
          Real project work taken from my CV, covering educational platforms, institutional
          websites, and a public service system built with Laravel and React.js.
        </p>
      </div>

      <div className="no-scrollbar overflow-x-auto">
        <div className="flex gap-4 pb-2">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
              className="flex min-h-[24rem] min-w-[20rem] max-w-[20rem] flex-col rounded-[28px] border border-rose-200/75 bg-white/62 p-4 shadow-[0_20px_60px_rgba(244,114,182,0.14)] backdrop-blur-xl sm:min-w-[24rem] sm:max-w-[24rem]"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-44 w-full rounded-[20px] object-cover"
                />
              )}

              <div className="mt-4 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-normal tracking-tight text-rose-950">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-rose-950/68">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-pink-200 bg-pink-50/85 px-3 py-1 text-xs text-pink-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="mt-5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-pink-700 transition-colors hover:text-fuchsia-700"
                    >
                      View GitHub
                      <ArrowRight size={15} />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
