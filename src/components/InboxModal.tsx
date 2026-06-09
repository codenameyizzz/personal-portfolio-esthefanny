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
          className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/28 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative flex max-h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-rose-200 bg-white/95 text-left shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-rose-100 bg-rose-50/80 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-rose-300" />
                <h3 className="font-display text-sm font-black uppercase tracking-wider text-rose-950">
                  Local Inbox Dashboard
                </h3>
              </div>
              <button
                onClick={onClose}
                className="cursor-pointer rounded-full p-1.5 text-rose-400 transition-all hover:bg-rose-100 hover:text-rose-900"
                aria-label="Close modal"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex-grow space-y-4 overflow-y-auto p-6">
              <div className="rounded-xl border border-rose-200 bg-rose-50/85 p-3 font-sans text-[10px] leading-relaxed text-rose-700">
                This inbox stores contact form entries locally in the browser via{' '}
                <code>localStorage</code> so you can test the interaction without a backend.
              </div>

              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center space-y-3 py-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-200 text-rose-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold text-rose-950">
                      Clear Transmission Pipe
                    </h4>
                    <p className="mt-1 max-w-xs text-[10px] text-rose-500">
                      No message signals have been initialized yet. Fill out the contact handshake
                      form to see entries accumulate synchronously.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="group/item relative overflow-hidden rounded-xl border border-rose-100 bg-rose-50/65 p-4"
                    >
                      <button
                        onClick={() => onDeleteMessage(msg.id)}
                        className="absolute right-4 top-4 cursor-pointer rounded-md bg-transparent p-1.5 text-rose-400 opacity-0 transition-all hover:bg-red-50 hover:text-red-500 group-hover/item:opacity-100"
                        title="Delete Signal Record"
                      >
                        <Trash2 size={12} />
                      </button>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="truncate pr-6 font-display text-xs font-bold text-rose-950">
                            {msg.name}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] text-rose-500">
                          <span>{msg.email}</span>
                          <span>-</span>
                          <div className="flex items-center gap-0.5">
                            <Clock size={10} />
                            <span>{msg.timestamp}</span>
                          </div>
                        </div>

                        <div className="border-t border-rose-100 pt-2 text-left">
                          <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-rose-600">
                            SUBJECT: {msg.subject}
                          </p>
                          <p className="break-words rounded-lg border border-rose-100 bg-white/80 p-2.5 font-sans text-xs font-light leading-normal text-rose-900/75">
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
              <div className="flex items-center justify-between border-t border-rose-100 bg-rose-50/80 px-6 py-4">
                <span className="font-mono text-[9px] font-semibold text-rose-600">
                  TOTAL CHANNELS: {messages.length}
                </span>

                <button
                  onClick={onClearAll}
                  className="cursor-pointer rounded-lg border border-red-100 px-3.5 py-1.5 font-mono text-[10px] font-semibold text-red-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
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
