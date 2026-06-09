/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenInbox: () => void;
  messageCount: number;
}

export default function Header({ onOpenInbox, messageCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 110,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[22px] border border-white/10 bg-black/40 px-5 py-4 text-white backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-6">
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer text-sm font-medium tracking-tight transition-all ${
                  activeSection === item.id ? 'text-white' : 'text-white/55 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            {messageCount > 0 && (
              <button
                onClick={onOpenInbox}
                className="hidden rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/80 transition-all hover:bg-white/[0.08] hover:text-white sm:inline-flex"
              >
                Inbox ({messageCount})
              </button>
            )}

            <button
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer text-sm font-medium tracking-tight text-white"
            >
              ECS.
            </button>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex cursor-pointer rounded-full border border-white/10 bg-white/[0.05] p-2 text-white md:hidden"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`cursor-pointer py-1 text-left text-sm transition-colors ${
                      activeSection === item.id ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                {messageCount > 0 && (
                  <button
                    onClick={onOpenInbox}
                    className="mt-1 w-fit rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/80"
                  >
                    Inbox ({messageCount})
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
