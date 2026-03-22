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
    title: 'Tassyir — Multi-Tenant E-commerce SaaS Platform',
    shortDescription:
      'Multi-tenant SaaS backend allowing multiple businesses to run independent stores on shared infrastructure.',
    role: 'Backend Engineer',
    startDate: { year: 2025, month: 1 },
    endDate: null,
    img: tassyirImg,
    problem:
      'Small and medium businesses need full e-commerce infrastructure (products, orders, inventory, analytics) but running separate applications and infrastructure for every store is inefficient and expensive.',
    solution:
      'Built a multi-tenant SaaS backend that allows multiple businesses to operate independent stores on shared infrastructure. The system provides store isolation at the application level while using a shared PostgreSQL schema, and includes product and variant management, inventory tracking, order processing, analytics, and integrations with external services.',
    challenges: [
      'Designing a multi-tenant backend architecture with secure business isolation using a shared database schema',
      'Adding AI-powered image generation workflows for product media creation',
      'Scraping Chinese e-commerce sites to import products and using AI to normalize, enrich, and prepare them for the catalog',
      'Implementing a Shopify-style product and variant system with relational data modeling',
      'Building an inventory system with history tracking and reserved quantities for orders',
      'Integrating external shipping and tracking APIs while handling rate limits and inconsistent responses',
      'Managing dynamic database connections and performance optimization for multiple businesses',
      'Deploying the platform with Docker, VPS infrastructure, DNS routing, and subdomain handling',
      'Designing a credit system to meter usage and enable controlled access to features',
      'Managing finance and billing complexities',
      'Handling custom domains and tenant routing (DNS records, TLS/SSL termination, and HTTPS)',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'Next.js', 'Docker', 'Nginx', 'Cloudflare', 'TypeScript'],
    github: '#',
    link: '#',
    id: uuid(),
  },
  {
    title: 'Freelance',
    shortDescription:
      'Full-stack commerce systems with product catalogs, order flows, admin dashboards, and analytics.',
    role: 'Freelance Full-stack Developer',
    startDate: { year: 2022, month: 7 },
    endDate: { year: 2024, month: 12 },
    img: amazon,
    problem:
      'Businesses needed custom e-commerce platforms with administrative control over products, orders, inventory, and analytics, tailored to their specific operations.',
    solution:
      'Developed full-stack e-commerce systems including storefronts, admin dashboards, inventory management tools, and analytics pages. Each system was built to handle real product catalogs, customer orders, and operational workflows.',
    challenges: [
      'Designing scalable product catalog and order management systems',
      'Building admin dashboards for inventory, team management, and analytics',
      'Implementing REST APIs for frontend communication and external integrations',
      'Deploying applications using Docker and VPS infrastructure',
      'Ensuring reliability and maintainability in production environments',
    ],
    stack: ['Next.js', 'Node.js', 'MongoDB', 'React', 'Tailwind CSS', 'Docker', 'VPS Deployment'],
    github: '#',
    link: '#',
    id: uuid(),
  },
  {
    title: 'Interactive Browser Games Collection',
    shortDescription:
      'Small collection of browser games to showcase React state and UI logic.',
    role: 'Front-end / React Developer',
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
    problem:
      'Creating interactive browser games requires managing complex UI state, user interactions, and game logic entirely in the browser.',
    solution:
      'Developed several browser-based games using React, focusing on component-based UI design and predictable state management.',
    challenges: [
      'Managing game state and user interactions in React',
      'Implementing logic for turn-based and memory-based games',
      'Structuring reusable UI components for consistent gameplay interfaces',
      'Handling real-time UI updates without performance issues',
    ],
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    github: '',
    link: '',
    id: uuid(),
  },
  {
    title: 'Frontend Interface Replications',
    shortDescription:
      'Early projects cloning popular interfaces to learn DOM structure and layout.',
    role: 'Front-end Developer',
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
    problem:
      'Understanding how large-scale web platforms structure their interfaces and handle complex layouts requires rebuilding them from scratch.',
    solution:
      'Recreated simplified versions of Amazon and YouTube interfaces to study layout systems, DOM manipulation, and frontend architecture.',
    challenges: [
      'Replicating complex responsive layouts using CSS',
      'Implementing interactive UI behavior with JavaScript',
      'Structuring reusable components and modular frontend code',
      'Managing dynamic content rendering in the browser',
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/cherifmoh/Youtube',
    link: 'https://cherifmoh.github.io/Youtube/',
    id: uuid(),
  },
];
