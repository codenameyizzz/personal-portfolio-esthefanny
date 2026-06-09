/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'software' | 'web' | 'all';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  highlights?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
  iconName?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  content: string;
  timestamp: string;
}
