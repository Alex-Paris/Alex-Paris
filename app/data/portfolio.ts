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

// TODO: Update with your personal information
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
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    longDescription:
      'Built with React, Node.js, PostgreSQL, and Stripe. Features include product catalog, shopping cart, order tracking, and comprehensive analytics.',
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Stripe',
      'Tailwind CSS',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop', // TODO: Replace with actual screenshot
    repoUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team boards, and drag-and-drop interface.',
    longDescription:
      'A Trello-inspired app built with React, Firebase, and Material-UI. Supports multiple boards, real-time collaboration, and file attachments.',
    tech: ['React', 'Firebase', 'Redux', 'Material-UI', 'React DnD'],
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop', // TODO: Replace
    repoUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://your-task-app.com',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with forecasts, interactive maps, and location-based alerts.',
    tech: ['React', 'TypeScript', 'OpenWeather API', 'Leaflet', 'Chart.js'],
    imageUrl:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop', // TODO: Replace
    repoUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-app.com',
    featured: false,
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
