/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Skill, Certification, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Esthefany Christin Sipahutar',
  shortBio:
    'Student at Undergraduate Program in Software Engineering, Institut Teknologi Del.',
  longBio:
    'First-year Applied Software Engineering (D4) student with experience in software development projects. Developing strong proficiency in using Laravel and React.js for full-stack web development, with a solid background in database management using MySQL.',
  location: 'Institut Teknologi Del',
  email: 'esthefanychristin@gmail.com',
  github: 'https://github.com/esthefanysipahutar',
  linkedin: '',
  twitter: '',
  avatarUrl: '',
  currentFocus:
    'Building stronger full-stack capability with Laravel and React.js while improving database, API, and microservices understanding.',
  stats: [],
};

export const PROJECTS: Project[] = [
  {
    id: 'school-information-website',
    title: 'School Information Website',
    description:
      'A public-facing information website for SMA Swasta Rumah Harapan Tobasa that centralizes school profile, curriculum, achievements, and announcements.',
    longDescription:
      'A public-facing information website developed for SMA Swasta Rumah Harapan Tobasa, designed to provide key information about the school including its profile, vision and mission, educational curriculum, achievements, and public announcements. The site serves as a centralized platform to improve the school’s digital presence and communication with the public.',
    category: 'web',
    tags: ['Laravel 11', 'CSS', 'SQLyog', 'XAMPP', 'GitHub', 'Figma'],
    githubUrl: 'https://github.com/codenameyizzz',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900',
    featured: true,
    highlights: [
      'Designed UI in Figma before implementation',
      'Built backend features using Laravel',
      'Handled database setup, routing, and content management',
    ],
  },
  {
    id: 'physics-elearning-website',
    title: 'Physics E-Learning Website',
    description:
      'An interactive web-based learning platform for 11th-grade physics with theory modules, videos, practice questions, and quizzes.',
    longDescription:
      'An interactive web-based learning platform focused on 11th-grade physics curriculum. The platform includes modules for theory explanations, instructional videos, practice questions, and quizzes, aiming to enhance independent learning for high school students through an engaging digital experience.',
    category: 'web',
    tags: ['React.js', 'CSS', 'React Router', 'LocalStorage', 'GitHub'],
    githubUrl: 'https://github.com/codenameyizzz',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=900',
    featured: true,
    highlights: [
      'Developed UI and application structure with React.js',
      'Implemented routing and component-based architecture',
      'Managed content loading and state handling with local storage',
    ],
  },
  {
    id: 'tapatupa',
    title: 'TAPATUPA',
    description:
      'An integrated public land rental service system for the regional government of North Tapanuli with admin, submission, tariff, and tracking features.',
    longDescription:
      'TAPATUPA is an integrated system designed to digitize and streamline the public land rental service process for the regional government of North Tapanuli. The system provides key features including admin login, rental application submission, land object data, retribution tariffs, registered applicants, and application status tracking.',
    category: 'software',
    tags: ['Laravel API', 'React.js', 'SQLyog', 'CSS', 'Figma', 'GitHub'],
    githubUrl: 'https://github.com/codenameyizzz',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900',
    featured: true,
    highlights: [
      'Designed the interface in Figma',
      'Built RESTful API using Laravel',
      'Collaborated on frontend integration with React.js',
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'del-institute',
    company: 'Institut Teknologi Del',
    role: 'Undergraduate Program in Software Engineering',
    location: 'Aug 2024 - Sep 2028 (Expected)',
    period: 'Cumulative GPA: 3.2 / 4.0',
    description:
      'Currently studying Applied Software Engineering (D4) with a focus on practical software development, full-stack web technologies, and database-driven application development.',
    bullets: [
      'Building hands-on experience through academic and independent software projects.',
      'Strengthening practical skills in Laravel and React.js for modern web development.',
      'Developing a solid foundation in MySQL, SQLite, API design, and software engineering workflow.',
    ],
    logoText: 'ITD',
    logoBg: 'bg-pink-500',
  },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 82, category: 'languages' },
  { name: 'PHP', level: 76, category: 'languages' },

  { name: 'React', level: 84, category: 'frameworks' },
  { name: 'Laravel', level: 83, category: 'frameworks' },
  { name: 'Node.js', level: 70, category: 'frameworks' },

  { name: 'MySQL', level: 80, category: 'databases' },
  { name: 'SQLite', level: 73, category: 'databases' },

  { name: 'GitHub', level: 82, category: 'tools' },
  { name: 'Visual Studio Code', level: 88, category: 'tools' },
  { name: 'SQLyog', level: 72, category: 'tools' },
  { name: 'XAMPP', level: 70, category: 'tools' },
  { name: 'Figma', level: 78, category: 'tools' },
  { name: 'Microservices', level: 65, category: 'tools' },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'education-program',
    title: 'Applied Software Engineering (D4)',
    issuer: 'Institut Teknologi Del',
    date: 'Aug 2024 - Sep 2028 (Expected)',
  },
  {
    id: 'gpa-record',
    title: 'Current Cumulative GPA',
    issuer: 'Institut Teknologi Del',
    date: '3.2 / 4.0',
  },
  {
    id: 'focus-stack',
    title: 'Current Development Focus',
    issuer: 'Laravel, React.js, MySQL',
    date: 'Active',
  },
];

export const TESTIMONIALS: Testimonial[] = [];
