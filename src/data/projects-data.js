import uuid from 'react-uuid';
import tassyirImg from "../assets/e1606911-a8ab-4400-9cbc-e44feffdcc3e.png";
import amazon from "../assets/amazon.png";
import Xo from "../assets/XO.PNG";
import Memory from "../assets/Memory.png";
import hangman from "../assets/hangman.PNG";
import rps from "../assets/rock-paper-scissors.png";
import Tenzies from "../assets/Tenzies.png";
import Snake from "../assets/Snake.png";
import youtube from "../assets/youtube.png";

export const ProjectsData = [
  {
    title: 'TASSYIR',
    shortDescription:
      'Built and operate the backend of a multi-tenant e-commerce SaaS platform used by multiple businesses to manage products, orders, and operations.',
    role: 'Backend Engineer',
    company: 'Tassyir',
    employmentType: 'Full-time',
    startDate: { year: 2025, month: 1 },
    endDate: null,
    img: tassyirImg,
    challenges: [
      'Designed shared-schema PostgreSQL architecture with secure tenant isolation and dynamic connection handling',
      'Implemented Shopify-like product and variant system with flexible relational data modeling',
      'Built advanced inventory system with stock tracking, reservations, and order lifecycle management',
      'Developed AI-powered workflows for product image generation and automated product data enrichment (scraping + normalization)',
      'Integrated external shipping and tracking APIs, handling rate limits and inconsistent responses',
      'Managed production deployment (Docker, VPS, Nginx, Cloudflare), including domains, subdomains, and SSL',
      'Designed credit-based system to control feature usage and platform access',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'Next.js', 'Docker', 'Nginx', 'Cloudflare', 'TypeScript'],
    github: '#',
    link: '#',
    id: uuid(),
  },
  {
    title: 'Freelance',
    shortDescription:
      'Built and delivered custom e-commerce platforms for real clients, including storefronts and admin dashboards for managing products, orders, and inventory.',
    role: 'Freelance Full-Stack Developer',
    company: 'Freelance',
    employmentType: 'Freelance',
    startDate: { year: 2023, month: 1 },
    endDate: { year: 2024, month: 12 },
    img: amazon,
    sections: [
      {
        title: 'Project 1: Production-Based E-commerce System',
        items: [
          'Designed and implemented a complex inventory system tracking raw materials, component assembly, and finished products',
          'Built backend logic to manage production workflows, stock levels, and order processing',
          'Developed full admin dashboard for inventory and operations management',
        ],
      },
      {
        title: 'Project 2: Reseller E-commerce Platform',
        items: [
          'Built a simplified inventory system tailored for product reselling',
          'Developed a landing page builder for creating product-specific pages',
          'Implemented backend APIs and database structure for scalable product and order management',
        ],
      },
    ],
    challenges: [
      'Deployed applications using Docker and VPS infrastructure, ensuring reliability and maintainability',
    ],
    stack: ['Next.js', 'Node.js', 'MongoDB', 'React', 'Tailwind CSS', 'Docker', 'VPS Deployment'],
    github: '#',
    link: '#',
    id: uuid(),
  },
  {
    title: 'MINI GAMES',
    shortDescription:
      'Built a collection of 6 interactive browser games to demonstrate React state management and dynamic UI logic.',
    role: 'Front-end / React Developer',
    company: 'Interactive Browser Games Collection',
    employmentType: 'Project',
    startDate: { year: 2022 },
    endDate: { year: 2023 },
    img: null,
    games: [
      {
        title: 'Tic Tac Toe',
        img: Xo,
        link: 'https://cherifmoh.github.io/Tic-Tac-Toe/',
      },
      {
        title: 'Memory Game',
        img: Memory,
        link: 'https://cherifmoh.github.io/Memory/',
      },
      {
        title: 'Hangman Game',
        img: hangman,
        link: 'https://cherifmoh.github.io/Hangman/',
      },
      {
        title: 'Rock Paper Scissors',
        img: rps,
        link: 'https://cherifmoh.github.io/Rock-Paper-Scissors/',
      },
      {
        title: 'Tenzies Game',
        img: Tenzies,
        link: 'https://cherifmoh.github.io/Tenzies/',
      },
      {
        title: 'Snake Game',
        img: Snake,
        link: 'https://cherifmoh.github.io/Snake/snake.html',
      },
    ],
    challenges: [
      'Developed games including Tic Tac Toe, Memory, Hangman, Rock Paper Scissors, Tenzies, and Snake',
      'Managed complex state and user interactions across different game mechanics',
      'Structured reusable UI components for consistent gameplay interfaces',
      'Ensured smooth real-time updates and performance across all games',
    ],
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    github: '',
    link: '',
    id: uuid(),
  },
  {
    title: 'CLONES',
    shortDescription:
      'Built clones of popular platforms to master responsive layouts and frontend architecture.',
    role: 'Front-end Developer',
    company: 'Frontend Interface Replications',
    employmentType: 'Project',
    startDate: { year: 2021 },
    endDate: { year: 2021 },
    img: null,
    games: [
      {
        title: 'YouTube Clone',
        img: youtube,
        link: 'https://cherifmoh.github.io/Youtube/',
      },
      {
        title: 'Amazon Clone',
        img: amazon,
        link: 'https://cherifmoh.github.io/Amazon/',
      },
    ],
    challenges: [
      'Recreated interfaces similar to YouTube and Amazon with responsive design',
      'Implemented interactive UI behavior using JavaScript',
      'Structured modular components for maintainable frontend code',
      'Managed dynamic content rendering and layout behavior',
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/cherifmoh/Youtube',
    link: 'https://cherifmoh.github.io/Youtube/',
    id: uuid(),
  },
];
