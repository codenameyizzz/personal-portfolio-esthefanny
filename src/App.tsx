/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ExtraAndReviews from './components/ExtraAndReviews';
import Header from './components/Header';
import Hero from './components/Hero';
import InboxModal from './components/InboxModal';
import Projects from './components/Projects';
import Skillsets from './components/Skillsets';
import { Message } from './types';

const STORAGE_KEY = 'esthefany_portfolio_messages';

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inboxOpen, setInboxOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });
  const topGlowY = useTransform(scrollYProgress, [0, 1], [-40, 120]);
  const leftGlowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rightGlowY = useTransform(scrollYProgress, [0, 1], [0, -160]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setMessages(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error reading localStorage messages:', error);
    }
  }, []);

  const persistMessages = (nextMessages: Message[]) => {
    setMessages(nextMessages);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextMessages));
    } catch (error) {
      console.error('Error saving messages to localStorage:', error);
    }
  };

  const handleSendMessage = (newMsg: Omit<Message, 'id' | 'timestamp'>) => {
    const fullMsg: Message = {
      ...newMsg,
      id: Math.random().toString(36).substring(2, 9),
      timestamp: `${new Date().toLocaleTimeString()} | ${new Date().toLocaleDateString()}`,
    };

    persistMessages([fullMsg, ...messages]);
  };

  const handleDeleteMessage = (id: string) => {
    persistMessages(messages.filter((message) => message.id !== id));
  };

  const handleClearAll = () => {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing localStorage messages:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-white/75"
        style={{ scaleX: progressScaleX }}
      />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          style={{ y: topGlowY }}
          className="absolute left-1/2 top-[-9rem] h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          style={{ y: leftGlowY }}
          className="absolute left-[15%] top-[18rem] h-48 w-48 rounded-full bg-slate-500/10 blur-3xl"
        />
        <motion.div
          style={{ y: rightGlowY }}
          className="absolute bottom-[12rem] right-[10%] h-60 w-60 rounded-full bg-neutral-400/10 blur-3xl"
        />
      </div>

      <Header onOpenInbox={() => setInboxOpen(true)} messageCount={messages.length} />

      <main className="relative z-10 space-y-5 px-4 pb-16 pt-28 sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skillsets />
        <ExtraAndReviews />
        <Contact onSendMessage={handleSendMessage} />
      </main>

      <footer className="relative z-10 px-4 pb-10 pt-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto flex max-w-6xl items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-white/60 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-white/70" />
            <span>Esthefany Christin Sipahutar</span>
          </div>
          <span className="hidden sm:inline">Software Engineering Student Portfolio</span>
        </motion.div>
      </footer>

      <InboxModal
        isOpen={inboxOpen}
        onClose={() => setInboxOpen(false)}
        messages={messages}
        onClearAll={handleClearAll}
        onDeleteMessage={handleDeleteMessage}
      />
    </div>
  );
}
