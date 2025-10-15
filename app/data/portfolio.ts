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

// TODO: Replace with your actual web projects
export const webProjects: WebProject[] = [
  {
    id: 'project-1',
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
    imageUrl: '/images/projects/project-1.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://www.funada.com.br/',
    featured: true,
    category: 'client',
  },
  {
    id: 'project-2',
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
    imageUrl: '/images/projects/project-2.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://bizbizshare.com',
    featured: true,
    category: 'professional',
  },
  {
    id: 'project-3',
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
    imageUrl: '/images/projects/project-3.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://jqlift.bizbizshare.com',
    featured: true,
    category: 'client',
  },
  {
    id: 'project-4',
    title: 'S&J Installation & Innovation',
    description:
      'Corporate website for S&J Installation & Innovation, featuring their installation services, innovation solutions, and team collaboration platform.',
    longDescription:
      'A comprehensive corporate website for S&J Installation & Innovation showcasing their cutting-edge solutions and PowerChock technology. The site features a streamlined process overview (Discovery, Design, Deliver), team information, career opportunities, and contact forms designed for B2B clients in the installation and innovation industry.',
    tech: ['WordPress', 'Responsive Design', 'Figma'],
    imageUrl: '/images/projects/project-4.webp?w=800&h=600&fit=crop',
    liveUrl: 'https://installationsj.com',
    featured: true,
    category: 'client',
  },
  {
    id: 'project-5',
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
    imageUrl: '/images/projects/project-5.webp?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/Alex-Paris/helas',
    liveUrl: 'https://helas.vercel.app',
    category: 'hobby',
  },
  {
    id: 'project-6',
    title: 'CPE Maimonide',
    description:
      'Corporate website for CPE Maimonide, a French-Canadian early childhood center featuring educational programs, bilingual services, and parent information.',
    longDescription:
      'A comprehensive corporate website for CPE Maimonide, a French-Canadian early childhood center located in Côte Saint-Luc, Quebec. The site showcases their educational programs for children aged 18 months to 4+ years, bilingual services, speech therapy and occupational therapy programs, operating hours, and contact information. Features a clean, family-friendly design optimized for parents seeking quality childcare services.',
    tech: ['WordPress', 'Responsive Design', 'Multilingual Content', 'Figma'],
    imageUrl: '/images/projects/project-6.webp?w=800&h=600&fit=crop',
    liveUrl:
      'https://www.figma.com/proto/o89ZmkJh3h51gNR30sxBRk/CPE-Maimonide?node-id=1-8&p=f&t=ZXJClCgP5US1Maix-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    category: 'client',
  },
  {
    id: 'project-7',
    title: 'RAW Finder',
    description:
      'RAW Finder is a company used in sourcing bulk chemicals with ease and efficiency',
    longDescription:
      'RAW Finder is a company used in sourcing bulk chemicals with ease and efficiency.',
    tech: ['React', 'Figma'],
    imageUrl: '/images/projects/project-7.webp?w=800&h=600&fit=crop',
    liveUrl:
      'https://www.figma.com/proto/wPrOyBq7WiiE38Nw0rm9sC/Raw-Finder?node-id=1-3&t=kMvMFC0VBJIGerkx-1',
    category: 'client',
  },
  {
    id: 'project-8',
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
    imageUrl: '/images/projects/project-8.webp?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/Alex-Paris/ignite-shop',
    liveUrl: 'https://ignite-shop-alex-paris.vercel.app',
    category: 'hobby',
  },
  {
    id: 'project-9',
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
    imageUrl: '/images/projects/project-9.webp?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/Alex-Paris/ignews',
    liveUrl: 'https://ignews-lilac-gamma.vercel.app/',
    category: 'hobby',
  },
  {
    id: 'project-10',
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
    imageUrl: '/images/projects/project-10.webp?w=800&h=600&fit=crop',
    repoUrl: 'https://github.com/Alex-Paris/gobarber',
    liveUrl: 'https://alexparis.dev/demos/GoBarber/',
    category: 'hobby',
  },
]

// TODO: Replace with your actual Unity games
export const unityGames: UnityGame[] = [
  {
    id: 'game-1',
    title: 'Defenders of The Empire',
    description:
      'A strategic tower defense game where you protect your kingdom from waves of invaders.',
    longDescription:
      'Built in Unity with custom AI pathfinding, particle effects, and progressive difficulty. Features 20+ levels, multiple tower types, and upgrade systems.',
    tech: ['Unity', 'C#', 'Universal RP', 'NavMesh', 'Cinemachine'],
    imageUrl:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop', // TODO: Replace with game screenshot
    // Option 1: Host WebGL build locally
    unityBuildPath: '/unity/defenders-of-the-empire', // TODO: Build and place in public/unity/
    // Option 2: Or link to external host
    // liveUrl: "https://yourusername.itch.io/defenders-of-the-empire",
    repoUrl: 'https://github.com/yourusername/defenders-of-the-empire',
    featured: true,
  },
  {
    id: 'game-2',
    title: 'Kitchen Chaos',
    description:
      'Fast-paced cooking simulation game where timing and multitasking are key to success.',
    longDescription:
      'A chaotic kitchen management game inspired by Overcooked. Supports local multiplayer, features multiple recipes, and includes a campaign mode with increasing difficulty.',
    tech: ['Unity', 'C#', 'Input System', 'Multiplayer', 'Unity Events'],
    imageUrl:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop', // TODO: Replace
    liveUrl: 'https://yourusername.itch.io/kitchen-chaos', // TODO: Update
    featured: true,
  },
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
