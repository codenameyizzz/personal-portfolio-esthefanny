/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Github, Mail, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { Message } from '../types';

interface ContactProps {
  onSendMessage: (msg: Omit<Message, 'id' | 'timestamp'>) => void;
}

export default function Contact({ onSendMessage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const socials = [
    PERSONAL_INFO.github
      ? { icon: <Github size={16} />, url: PERSONAL_INFO.github, handle: 'GitHub' }
      : null,
  ].filter(Boolean) as Array<{ icon: React.ReactNode; url: string; handle: string }>;

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', content: '' });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.content) return;

    setLoading(true);
    setTimeout(() => {
      onSendMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'General Inquiry',
        content: formData.content,
      });
      setLoading(false);
      setSuccess(true);
      resetForm();
      setTimeout(() => setSuccess(false), 5000);
    }, 900);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-6xl scroll-mt-28 rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-7 backdrop-blur-xl sm:px-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">contact</p>
          <h2 className="mt-2 text-4xl font-normal tracking-tight text-white sm:text-5xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-white/62">
            You can reach me through email or GitHub. The form below still works locally and stores messages in the inbox panel for testing.
          </p>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78 transition-all hover:bg-white/[0.08] hover:text-white"
          >
            <Mail size={15} />
            {PERSONAL_INFO.email}
            <ArrowRight size={15} />
          </a>

          <div className="mt-6 flex gap-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72 transition-all hover:bg-white/[0.08] hover:text-white"
                aria-label={social.handle}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-hidden placeholder:text-white/32 focus:border-white/24"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-hidden placeholder:text-white/32 focus:border-white/24"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-hidden placeholder:text-white/32 focus:border-white/24"
            />

            <textarea
              required
              rows={6}
              placeholder="Message"
              value={formData.content}
              onChange={(event) => setFormData({ ...formData, content: event.target.value })}
              className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-hidden placeholder:text-white/32 focus:border-white/24"
            />

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/78"
                >
                  <CheckCircle2 size={16} />
                  <span>Message saved locally to the inbox panel.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Message'}
              {!loading && <Send size={15} />}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
