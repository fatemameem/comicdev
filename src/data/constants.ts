import type { ExperienceItem, EducationItem, ProjectItem, VoluntaryItem, NavItem } from '../../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'voluntary', label: 'Voluntary' },
  { id: 'additional', label: 'More' },
  { id: 'contact', label: 'Contact' },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "B.Sc. Computer Science and Engineering",
    school: "BRAC University",
    year: "2017 - 2021",
    details: "Focus on Human-Computer Interaction & Web Technologies. Graduated Summa Cum Laude."
  },
  {
    id: 2,
    degree: "M.Engg. Information Systems Security",
    school: "Concordia University",
    year: "2023 - 2024",
    details: "Intensive 12-week program covering React, Node.js, and Cloud Infrastructure."
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Bevy Commerce",
    period: "JUN 2021 - DEC 2021",
    description: "Leading the UI redesign initiative. Improved performance by 40% through code splitting and asset optimization. Mentoring junior developers.",
    skills: ["React", "Shopify", "Next.js", "Performance"]
  },
  {
    id: 2,
    role: "Web Developer (Volunteer)",
    company: "TECHNEST Canada",
    period: "SEP 2024 - PRESENT",
    description: "Built responsive websites for 20+ clients. Collaborated closely with designers to implement pixel-perfect animations.",
    skills: ["Vue.js", "SCSS", "GSAP", "Accessibility"]
  }
];

export const PROJECTS: ProjectItem[] = [
  // Developer Projects
  {
    id: 1,
    title: "EcoTracker",
    category: "Developer",
    issueNumber: "#01",
    problem: "People want to track their carbon footprint but existing apps are boring and data-heavy.",
    idea: "Gamify the experience! Make saving the planet feel like an RPG game.",
    solution: "A mobile-first PWA that uses device sensors to auto-track travel and rewards users with 'Eco-Coins'.",
    longDescription: "EcoTracker is a progressive web application designed to make environmental awareness fun. By leveraging the device's GPS and accelerometer, the app automatically detects modes of transport (walking, cycling, driving) and estimates carbon emissions.",
    features: [
      "Automatic activity detection",
      "Gamified reward system with leaderboards",
      "Offline support via Service Workers",
      "Interactive data visualization charts"
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
    title: "DevDash",
    category: "Developer",
    issueNumber: "#02",
    problem: "Developers have too many tabs open for Jira, GitHub, and CI/CD status.",
    idea: "A unified command center for devops workflows.",
    solution: "Electron-based desktop app aggregating API data from major dev tools into a single customizable dashboard.",
    longDescription: "DevDash centralizes the chaotic developer workflow into a single window. It connects to popular APIs to pull PR status, ticket assignments, and build pipeline health in real-time.",
    features: [
      "Drag-and-drop widget layout",
      "OAuth2 integration for GitHub and Jira",
      "Real-time websocket updates",
      "Dark/Light mode themes"
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
    title: "RetroChat",
    category: "Developer",
    issueNumber: "#03",
    problem: "Modern chat apps are bloated. Sometimes you just want simple text.",
    idea: "Back to basics. IRC vibes with modern security.",
    solution: "Real-time chat application using WebSockets with end-to-end encryption and zero persistent storage.",
    longDescription: "A nostalgic nod to IRC clients, RetroChat provides ephemeral, secure communication. No message history is stored on the server, ensuring complete privacy.",
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
    title: "NetSentinel",
    category: "Security",
    issueNumber: "#04",
    problem: "Small businesses lack affordable intrusion detection systems.",
    idea: "A lightweight, Raspberry Pi compatible network monitor.",
    solution: "Python-based packet sniffer that uses machine learning to identify anomalous traffic patterns.",
    longDescription: "NetSentinel is designed for low-power edge devices. It monitors local network traffic and alerts administrators of suspicious port scanning or data exfiltration attempts via Telegram bot.",
    features: [
      "Real-time packet analysis",
      "ML-based anomaly detection",
      "Telegram/Slack alerts",
      "Low resource footprint"
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
    title: "CipherVault",
    category: "Security",
    issueNumber: "#05",
    problem: "Storing secrets in environment variables can still be leaky.",
    idea: "A hardware-backed secret management CLI.",
    solution: "A CLI tool that interfaces with YubiKeys to decrypt secrets only in memory during runtime.",
    longDescription: "CipherVault adds a physical layer of security to development secrets. It requires a hardware token presence to decrypt configuration files, preventing remote data theft.",
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
    role: "Mentor",
    organization: "Code for Good",
    description: "Teaching basic HTML/CSS to high school students in underrepresented communities."
  },
  {
    id: 2,
    role: "Open Source Contributor",
    organization: "React Docs",
    description: "Helped translate documentation to Spanish and fixed accessibility issues in examples."
  }
];

export const ADDITIONAL = [
  "Public Speaking: TechConf 2023",
  "Technical Writing: Medium Blog with 5k+ readers",
  "UI Design: Figma & Adobe XD proficiency"
];
