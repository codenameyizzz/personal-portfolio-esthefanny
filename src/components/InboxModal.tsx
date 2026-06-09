/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Clock, Trash2 } from 'lucide-react';
import { Message } from '../types';

interface InboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  onClearAll: () => void;
  onDeleteMessage: (id: string) => void;
}

export default function InboxModal({
  isOpen,
  onClose,
  messages,
  onClearAll,
  onDeleteMessage,
}: InboxModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm dark:bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative flex max-h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-2xl dark:border-neutral-800 dark:bg-[#0c0c0c]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-150 bg-gray-50/50 px-6 py-4 dark:border-neutral-900 dark:bg-neutral-950/20">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-500" />
                <h3 className="font-display text-sm font-black uppercase tracking-wider text-gray-950 dark:text-white">
                  Local Inbox Dashboard
                </h3>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer rounded-full p-1.5 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-neutral-850 dark:hover:text-white"
                aria-label="Close modal"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex-grow space-y-4 overflow-y-auto p-6">
              <div className="rounded-xl border border-indigo-100/50 bg-indigo-50/40 p-3 font-sans text-[10px] leading-relaxed text-indigo-700 dark:border-indigo-950 dark:bg-indigo-950/20 dark:text-indigo-400">
                This inbox stores contact form entries locally in the browser via <code>localStorage</code> so you can test the interaction without a backend.
              </div>

              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center space-y-3 py-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-400 dark:border-neutral-800">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-gray-950 dark:text-white">
                      Clear Transmission Pipe
                    </h4>
                    <p className="mt-1 max-w-xs text-[10px] text-gray-400">
                      No message signals have been initialized yet. Fill out the contact handshake form to see entries accumulate synchronously.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="group/item relative overflow-hidden rounded-xl border border-gray-150 bg-gray-55/40 p-4 dark:border-neutral-900 dark:bg-neutral-900/20"
                    >
                      <button
                        onClick={() => onDeleteMessage(msg.id)}
                        className="absolute right-4 top-4 cursor-pointer rounded-md bg-transparent p-1.5 text-gray-400 opacity-0 transition-all hover:bg-red-50 hover:text-red-500 group-hover/item:opacity-100 dark:hover:bg-red-950/20"
                        title="Delete Signal Record"
                      >
                        <Trash2 size={12} />
                      </button>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="truncate pr-6 font-display text-xs font-bold text-gray-900 dark:text-neutral-100">
                            {msg.name}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] text-gray-400">
                          <span>{msg.email}</span>
                          <span>•</span>
                          <div className="flex items-center gap-0.5">
                            <Clock size={10} />
                            <span>{msg.timestamp}</span>
                          </div>
                        </div>

                        <div className="border-t border-gray-100 pt-2 text-left dark:border-neutral-900">
                          <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                            SUBJECT: {msg.subject}
                          </p>
                          <p className="break-words rounded-lg border border-gray-100 bg-gray-50/50 p-2.5 font-sans text-xs font-light leading-normal text-gray-650 dark:border-neutral-900/60 dark:bg-neutral-950/20 dark:text-neutral-400">
                            {msg.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {messages.length > 0 && (
              <div className="flex items-center justify-between border-t border-gray-120 bg-gray-50/50 px-6 py-4 dark:border-neutral-900/85 dark:bg-[#0d0d0d]">
                <span className="font-mono text-[9px] font-semibold text-gray-500">
                  TOTAL CHANNELS: {messages.length}
                </span>

                <button
                  onClick={onClearAll}
                  className="cursor-pointer rounded-lg border border-red-100 px-3.5 py-1.5 font-mono text-[10px] font-semibold text-red-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-red-950 dark:hover:bg-red-950/20"
                >
                  Terminate All Logs
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
