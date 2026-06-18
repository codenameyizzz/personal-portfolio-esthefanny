/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Pause, Play, ShieldCheck, Volume2, VolumeX } from 'lucide-react';
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
import ambientTrack from '../assets/please-please.mp3';

const STORAGE_KEY = 'esthefany_portfolio_messages';
const AUDIO_VOLUME = 0.24;

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inboxOpen, setInboxOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });
  const topGlowY = useTransform(scrollYProgress, [0, 1], [-40, 120]);
  const leftGlowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rightGlowY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = AUDIO_VOLUME;
    audio.muted = false;

    const syncAudioState = () => {
      setIsAudioPlaying(!audio.paused);
      setIsAudioMuted(audio.muted);
    };

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setAutoplayBlocked(false);
        syncAudioState();
      } catch (error) {
        setAutoplayBlocked(true);
      }
    };

    const resumeFromGesture = async () => {
      if (!audio.paused) return;
      try {
        await audio.play();
        setAutoplayBlocked(false);
        syncAudioState();
      } catch (error) {
        setAutoplayBlocked(true);
      }
    };

    syncAudioState();
    attemptAutoplay();

    audio.addEventListener('play', syncAudioState);
    audio.addEventListener('pause', syncAudioState);
    audio.addEventListener('volumechange', syncAudioState);

    window.addEventListener('pointerdown', resumeFromGesture);
    window.addEventListener('keydown', resumeFromGesture);

    return () => {
      audio.removeEventListener('play', syncAudioState);
      audio.removeEventListener('pause', syncAudioState);
      audio.removeEventListener('volumechange', syncAudioState);
      window.removeEventListener('pointerdown', resumeFromGesture);
      window.removeEventListener('keydown', resumeFromGesture);
    };
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

  const toggleAudioPlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setAutoplayBlocked(false);
      } catch (error) {
        setAutoplayBlocked(true);
      }
      return;
    }

    audio.pause();
  };

  const toggleAudioMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsAudioMuted(audio.muted);
  };

  return (
    <div className="min-h-screen bg-transparent text-rose-950">
      <audio ref={audioRef} src={ambientTrack} preload="auto" />

      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-rose-300 via-pink-300 to-amber-100 shadow-[0_0_22px_rgba(244,114,182,0.18)]"
        style={{ scaleX: progressScaleX }}
      />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          style={{ y: topGlowY }}
          className="absolute left-1/2 top-[-10rem] h-96 w-96 -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl"
        />
        <motion.div
          style={{ y: leftGlowY }}
          className="absolute left-[10%] top-[18rem] h-64 w-64 rounded-full bg-pink-200/30 blur-3xl"
        />
        <motion.div
          style={{ y: rightGlowY }}
          className="absolute bottom-[10rem] right-[8%] h-80 w-80 rounded-full bg-amber-100/35 blur-3xl"
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

      <div className="fixed bottom-4 right-4 z-[70]">
        <div className="flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/82 px-3 py-2 shadow-[0_16px_40px_rgba(244,114,182,0.12)] backdrop-blur-xl">
          <button
            onClick={toggleAudioPlayback}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-rose-300 via-pink-200 to-amber-100 text-rose-950 transition-all hover:brightness-105"
            aria-label={isAudioPlaying ? 'Pause audio' : 'Play audio'}
          >
            {isAudioPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>

          <div className="hidden min-w-[8.5rem] sm:block">
            <p className="text-[10px] uppercase tracking-[0.22em] text-rose-500/85">
              Audio Track
            </p>
            <p className="text-sm text-rose-900/72">
              {autoplayBlocked && !isAudioPlaying ? 'Tap to start music' : 'Please Please'}
            </p>
          </div>

          <button
            onClick={toggleAudioMute}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200 bg-white/72 text-rose-700 transition-colors hover:bg-rose-50 hover:text-rose-900"
            aria-label={isAudioMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isAudioMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>

      <footer className="relative z-10 px-4 pb-10 pt-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto flex max-w-6xl items-center justify-between rounded-[24px] border border-rose-200/70 bg-white/68 px-6 py-4 text-sm text-rose-900/72 shadow-[0_18px_60px_rgba(244,114,182,0.1)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-rose-400" />
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
