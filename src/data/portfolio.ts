/**
 * Portfolio Data
 *
 * - Add your own project titles, descriptions, and links
 * - Replace image URLs with your actual screenshots (store in /public/images/)
 * - Update tech stacks to match your projects
 * - For Unity games, add WebGL build paths or hosted URLs
 */

export interface WebProject {
  id: string
  title: string
  description: string
  longDescription?: string
  tech: string[]
  imageUrl: string
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
  category?: 'client' | 'hobby' | 'professional'
}

export interface UnityGame {
  id: string
  title: string
  description: string
  longDescription?: string
  tech: string[]
  imageUrl: string
  // For locally hosted WebGL builds: path relative to /public (e.g., "unity/my-game")
  unityBuildPath?: string
  // For externally hosted builds or itch.io links
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export interface PersonalInfo {
  name: string
  role: string
  tagline: string
  bio: string[]
  email: string
  github?: string
  linkedin?: string
  twitter?: string
  itch?: string
}

export const personalInfo: PersonalInfo = {
  name: 'Alex Paris',
  role: 'Full-Stack Developer & Unity Game Developer',
  tagline: 'Building web applications and interactive experiences',
  bio: [
    "I'm a full-stack developer passionate about creating seamless user experiences on the web and in games.",
    'With expertise in React, Node.js, TypeScript, and Unity, I bridge the gap between traditional web development and interactive 3D experiences.',
    "When I'm not coding, I'm designing game mechanics, optimizing performance, or exploring new technologies.",
  ],
  email: 'me@alexparis.dev',
  github: 'https://github.com/Alex-Paris',
  linkedin: 'https://www.linkedin.com/in/alex-paris',
  // itch: 'https://yourusername.itch.io',
}

export const webProjects: WebProject[] = [
  {
    id: 'sgapetro',
    title: 'SGA Petro',
    description:
      'Comprehensive gas station management software application for SGA Petro, featuring purchase/sale management, invoice insurance, fuel movement tracking, POS system, and automation equipment integration.',
    longDescription:
      'A comprehensive gas station management software application for SGA Petro, a Brazilian software company specializing in gas station solutions. The application handles complete gas station operations including purchase and sale management, invoice insurance processing, fuel movement book tracking, point of sale functionality, and communication with automation equipment. Built with modern technologies including React.js frontend and C# API backend with Entity Framework, representing a migration from legacy Delphi systems to modern web technologies.',
    tech: [
      'React',
      'TypeScript',
      'C#',
      'Entity Framework',
      'ASP.NET Core',
      'POS System',
      'Invoice Management',
      'Automation Integration',
      'Legacy Migration',
    ],
    imageUrl: '/images/projects/sgapetro.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://gruposgapetro.com.br',
    featured: true,
    category: 'professional',
  },
  {
    id: 'funada',
    title: 'Funada Website',
    description:
      'Corporate website for Funada, a Brazilian beverage company featuring product showcases, interactive maps, and modern UI design.',
    longDescription:
      'A comprehensive corporate website for Funada, showcasing their diverse product line including traditional sodas, energy drinks, and water products. Features include product galleries, store locator with interactive maps, company news, and responsive design optimized for Brazilian market.',
    tech: [
      'React',
      'TypeScript',
      'Next.js',
      'Vercel',
      'Tailwind CSS',
      'Interactive Maps',
      'Responsive Design',
      'Figma',
    ],
    imageUrl: '/images/projects/funada.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://www.funada.com.br/',
    featured: true,
    category: 'client',
  },
  {
    id: 'bizbizshare',
    title: 'BizBizShare',
    description:
      'B2B marketplace platform enabling businesses to share and rent resources such as equipment, warehousing, and office space with comprehensive collaboration tools.',
    longDescription:
      'A comprehensive B2B marketplace platform for BizBizShare that facilitates business collaboration by allowing companies to monetize idle assets and find resources when needed. Features include equipment sharing, warehousing solutions, office space rental, and advanced search capabilities designed for enterprise clients.',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'B2B Solutions',
      'Marketplace Platform',
      'Responsive Design',
    ],
    imageUrl: '/images/projects/bizbizshare.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://bizbizshare.com',
    featured: true,
    category: 'professional',
  },
  {
    id: 'jq-lift',
    title: 'JQ Lift Website',
    description:
      'Corporate website for JQ Lift, a company specializing in lift equipment and elevator services with comprehensive product showcases.',
    longDescription:
      'A professional corporate website for JQ Lift featuring their lift equipment services, maintenance solutions, and elevator systems. The site includes detailed product information, service offerings, and contact forms designed for B2B clients in the lift and elevator industry.',
    tech: [
      'React',
      'TypeScript',
      'Responsive Design',
      'B2B Solutions',
      'Figma',
    ],
    imageUrl: '/images/projects/jq-lift.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://jqlift.bizbizshare.com',
    featured: true,
    category: 'client',
  },
  {
    id: 'sj-installation-innovation',
    title: 'S&J Installation & Innovation',
    description:
      'Corporate website for S&J Installation & Innovation, featuring their installation services, innovation solutions, and team collaboration platform.',
    longDescription:
      'A comprehensive corporate website for S&J Installation & Innovation showcasing their cutting-edge solutions and PowerChock technology. The site features a streamlined process overview (Discovery, Design, Deliver), team information, career opportunities, and contact forms designed for B2B clients in the installation and innovation industry.',
    tech: ['WordPress', 'Responsive Design', 'Figma'],
    imageUrl:
      '/images/projects/sj-installation-innovation.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://installationsj.com',
    featured: true,
    category: 'client',
  },
  {
    id: 'helas-travel',
    title: 'Helas Travel Platform',
    description:
      'Greek travel booking platform featuring vacation packages, hotel search, and destination discovery with advanced filtering and booking system.',
    longDescription:
      'A comprehensive travel booking platform for Greece featuring vacation packages, hotel accommodations, and destination exploration. The platform includes advanced search filters by price range, meal plans, ratings, and dates. Built with modern web technologies, it provides a seamless booking experience with real-time availability and pricing for Greek destinations.',
    tech: [
      'React',
      'TypeScript',
      'Vercel',
      'Tailwind CSS',
      'Search & Filters',
      'Responsive Design',
    ],
    imageUrl: '/images/projects/helas-travel.webp?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/Alex-Paris/helas',
    liveUrl: 'https://helas.vercel.app',
    category: 'hobby',
  },
  {
    id: 'cpe-maimonide',
    title: 'CPE Maimonide',
    description:
      'Corporate website for CPE Maimonide, a French-Canadian early childhood center featuring educational programs, bilingual services, and parent information.',
    longDescription:
      'A comprehensive corporate website for CPE Maimonide, a French-Canadian early childhood center located in Côte Saint-Luc, Quebec. The site showcases their educational programs for children aged 18 months to 4+ years, bilingual services, speech therapy and occupational therapy programs, operating hours, and contact information. Features a clean, family-friendly design optimized for parents seeking quality childcare services.',
    tech: ['WordPress', 'Responsive Design', 'Multilingual Content', 'Figma'],
    imageUrl: '/images/projects/cpe-maimonide.webp?w=800&h=600&fit=crop',
    liveUrl:
      'https://www.figma.com/proto/o89ZmkJh3h51gNR30sxBRk/CPE-Maimonide?node-id=1-8&p=f&t=ZXJClCgP5US1Maix-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    category: 'client',
  },
  {
    id: 'raw-finder',
    title: 'RAW Finder',
    description:
      'RAW Finder is a company used in sourcing bulk chemicals with ease and efficiency',
    longDescription:
      'RAW Finder is a company used in sourcing bulk chemicals with ease and efficiency.',
    tech: ['React', 'Figma'],
    imageUrl: '/images/projects/raw-finder.webp?w=800&h=600&fit=crop',
    liveUrl:
      'https://www.figma.com/proto/wPrOyBq7WiiE38Nw0rm9sC/Raw-Finder?node-id=1-3&t=kMvMFC0VBJIGerkx-1',
    category: 'client',
  },
  {
    id: 'ignite-shop',
    title: 'Ignite Shop',
    description:
      'E-commerce platform built with Next.js featuring product catalog, shopping cart, and Stripe payment integration for seamless online shopping experience.',
    longDescription:
      'A full-featured e-commerce platform built with Next.js and Stripe integration. Features include product catalog with filtering, shopping cart functionality, secure payment processing, order management, and responsive design. Built as a learning project to master modern e-commerce development practices.',
    tech: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'E-commerce',
      'Shopping Cart',
      'Responsive Design',
    ],
    imageUrl: '/images/projects/ignite-shop.webp?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/Alex-Paris/ignite-shop',
    liveUrl: 'https://ignite-shop-alex-paris.vercel.app',
    category: 'hobby',
  },
  {
    id: 'ig-news',
    title: 'ig.news',
    description:
      'React-focused news platform with GitHub authentication, subscription-based content, and Stripe payment integration for premium articles.',
    longDescription:
      'A modern news platform focused on React development content. Features include GitHub OAuth authentication, subscription-based premium content, Stripe payment processing, article management, and responsive design. Built to showcase full-stack development skills with authentication, payments, and content management.',
    tech: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'GitHub OAuth',
      'Prismic CMS',
      'Responsive Design',
    ],
    imageUrl: '/images/projects/ig-news.webp?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/Alex-Paris/ignews',
    liveUrl: 'https://ignews-lilac-gamma.vercel.app/',
    category: 'hobby',
  },
  {
    id: 'gobarber',
    title: 'GoBarber',
    description:
      'Barbershop management platform with appointment scheduling, user authentication, email notifications, and admin dashboard for service providers.',
    longDescription:
      'A comprehensive barbershop management platform built with React and Node.js. Features include appointment scheduling, user authentication, email notifications, admin dashboard, service management, and real-time updates. Demonstrates full-stack development skills with backend API, email services, and responsive frontend design.',
    tech: [
      'React',
      'React Native',
      'Node.js',
      'TypeScript',
      'Email Services',
      'Authentication',
      'Appointment System',
      'Responsive Design',
    ],
    imageUrl: '/images/projects/gobarber.webp?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/Alex-Paris/gobarber',
    liveUrl: 'https://alexparis.dev/demos/GoBarber/',
    category: 'hobby',
  },
]

// Unity Games - Interactive WebGL builds
export const unityGames: UnityGame[] = [
  {
    id: 'kitchen-chaos',
    title: 'Kitchen Chaos',
    description:
      'Fast-paced cooking simulation game where timing and multitasking are key to success.',
    longDescription:
      'A chaotic kitchen management game inspired by Overcooked. Features multiple recipes, and a campaign mode with increasing difficulty. Built with Unity and optimized for WebGL deployment.',
    tech: ['Unity', 'C#', 'Input System', 'Unity Events', 'WebGL'],
    imageUrl: '/images/games/kitchen-chaos.webp',
    unityBuildPath: '/unity/kitchen-chaos',
    featured: true,
  },
  {
    id: 'horde-project',
    title: 'Horde Project',
    description:
      'An intense survival game where you must defend against waves of enemies using strategy and quick reflexes.',
    longDescription:
      'A challenging survival game built with Unity featuring wave-based combat, strategic gameplay, and progressive difficulty. Players must defend their position against increasingly difficult hordes of enemies using various weapons and tactics. Optimized for WebGL deployment with smooth performance.',
    tech: ['Unity', 'C#', 'WebGL', 'Game Physics', 'AI Systems'],
    imageUrl: '/images/games/horde-project.webp',
    unityBuildPath: '/unity/horde-project',
    featured: true,
  },
  // {
  //   id: 'defenders-of-the-empire',
  //   title: 'Defenders of The Empire',
  //   description:
  //     'A strategic tower defense game where you protect your kingdom from waves of invaders.',
  //   longDescription:
  //     'Built in Unity with custom AI pathfinding, particle effects, and progressive difficulty. Features 20+ levels, multiple tower types, and upgrade systems.',
  //   tech: ['Unity', 'C#', 'Universal RP', 'NavMesh', 'Cinemachine'],
  //   imageUrl: '/images/games/defenders-of-the-empire.webp',
  //   // unityBuildPath: '/unity/defenders-of-the-empire',
  //   liveUrl: 'https://yourusername.itch.io/defenders-of-the-empire',
  // },
]

export const skills = {
  webDevelopment: [
    'React / Next.js',
    'TypeScript / JavaScript',
    'Node.js / Express',
    'PostgreSQL / MongoDB',
    'REST APIs / GraphQL',
    'Tailwind CSS / CSS',
    'Prismic / Strapi',
  ],
  gameDevelopment: [
    'Unity Engine',
    'C# Programming',
    'Game Physics',
    // '3D Modeling (Blender)',
    'Shader Programming',
    'WebGL Deployment',
  ],
  tools: [
    'Git / GitHub',
    'Docker',
    'AWS',
    'VS Code',
    'Figma',
    'Photoshop',
    'Jira / Linear',
  ],
}
