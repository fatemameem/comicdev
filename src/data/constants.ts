import type { ExperienceItem, EducationItem, ProjectItem, VoluntaryItem, NavItem } from '../../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'nav.about' },
  { id: 'education', label: 'nav.education' },
  { id: 'experience', label: 'nav.work' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'voluntary', label: 'nav.voluntary' },
  { id: 'additional', label: 'nav.more' },
  { id: 'contact', label: 'nav.contact' },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "education.degree.bsc",
    school: "education.school.brac",
    year: "period.2017-2021",
    details: "education.details.brac"
  },
  {
    id: 2,
    degree: "education.degree.meng",
    school: "education.school.concordia",
    year: "period.2023-2024",
    details: "education.details.concordia"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "experience.role.frontend",
    company: "experience.company.bevy",
    period: "period.jun2021Dec2021",
    description: "experience.desc.bevy",
    skills: ["React", "Shopify", "Next.js", "Performance"]
  },
  {
    id: 2,
    role: "experience.role.webdev",
    company: "experience.company.technest",
    period: "period.sep2024Present",
    description: "experience.desc.technest",
    skills: ["Vue.js", "SCSS", "GSAP", "Accessibility"]
  }
];

export const PROJECTS: ProjectItem[] = [
  // Developer Projects
  {
    id: 1,
    title: "projects.ecotracker.title",
    category: "category.developer",
    issueNumber: "#01",
    problem: "projects.ecotracker.problem",
    idea: "projects.ecotracker.idea",
    solution: "projects.ecotracker.solution",
    longDescription: "projects.ecotracker.longDescription",
    features: [
      "features.autoDetection",
      "features.gamifiedRewards",
      "features.offlineSupport",
      "features.dataVisualization"
    ],
    techStack: ["React", "Tailwind", "Framer Motion", "PWA"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=1",
      "https://picsum.photos/800/450?random=2",
      "https://picsum.photos/800/450?random=3"
    ]
  },
  {
    id: 2,
    title: "projects.devdash.title",
    category: "category.developer",
    issueNumber: "#02",
    problem: "projects.devdash.problem",
    idea: "projects.devdash.idea",
    solution: "projects.devdash.solution",
    longDescription: "projects.devdash.longDescription",
    features: [
      "features.dragDropLayout",
      "features.oauth2Integration",
      "features.realtimeUpdates",
      "features.darkLightMode"
    ],
    techStack: ["Electron", "TypeScript", "GraphQL", "Apollo"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=4",
      "https://picsum.photos/800/450?random=5"
    ]
  },
  {
    id: 3,
    title: "projects.retrochat.title",
    category: "category.developer",
    issueNumber: "#03",
    problem: "projects.retrochat.problem",
    idea: "projects.retrochat.idea",
    solution: "projects.retrochat.solution",
    longDescription: "projects.retrochat.longDescription",
    techStack: ["Node.js", "Socket.io", "Redis", "React"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=6",
      "https://picsum.photos/800/450?random=7"
    ]
  },
  // Security Projects (Placeholder)
  {
    id: 4,
    title: "projects.netsentinel.title",
    category: "category.security",
    issueNumber: "#04",
    problem: "projects.netsentinel.problem",
    idea: "projects.netsentinel.idea",
    solution: "projects.netsentinel.solution",
    longDescription: "projects.netsentinel.longDescription",
    features: [
      "features.packetAnalysis",
      "features.mlAnomalyDetection",
      "features.telegramAlerts",
      "features.lowResource"
    ],
    techStack: ["Python", "TensorFlow", "Linux", "Networking"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=8",
      "https://picsum.photos/800/450?random=9"
    ]
  },
  {
    id: 5,
    title: "projects.ciphervault.title",
    category: "category.security",
    issueNumber: "#05",
    problem: "projects.ciphervault.problem",
    idea: "projects.ciphervault.idea",
    solution: "projects.ciphervault.solution",
    longDescription: "projects.ciphervault.longDescription",
    techStack: ["Go", "Cryptography", "CLI", "Security"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=10"
    ]
  }
];

export const VOLUNTARY: VoluntaryItem[] = [
  {
    id: 1,
    role: "voluntary.mentor.role",
    organization: "voluntary.mentor.org",
    description: "voluntary.mentor.desc"
  },
  {
    id: 2,
    role: "voluntary.contributor.role",
    organization: "voluntary.contributor.org",
    description: "voluntary.contributor.desc"
  }
];

export const ADDITIONAL = [
  "additional.speaking",
  "additional.writing",
  "additional.design"
];
