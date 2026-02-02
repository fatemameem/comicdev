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
  {
    id: 1,
    title: "EcoTracker",
    issueNumber: "#01",
    problem: "People want to track their carbon footprint but existing apps are boring and data-heavy.",
    idea: "Gamify the experience! Make saving the planet feel like an RPG game.",
    solution: "A mobile-first PWA that uses device sensors to auto-track travel and rewards users with 'Eco-Coins'.",
    techStack: ["React", "Tailwind", "Framer Motion", "PWA"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: 2,
    title: "DevDash",
    issueNumber: "#02",
    problem: "Developers have too many tabs open for Jira, GitHub, and CI/CD status.",
    idea: "A unified command center for devops workflows.",
    solution: "Electron-based desktop app aggregating API data from major dev tools into a single customizable dashboard.",
    techStack: ["Electron", "TypeScript", "GraphQL", "Apollo"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: 3,
    title: "RetroChat",
    issueNumber: "#03",
    problem: "Modern chat apps are bloated. Sometimes you just want simple text.",
    idea: "Back to basics. IRC vibes with modern security.",
    solution: "Real-time chat application using WebSockets with end-to-end encryption and zero persistent storage.",
    techStack: ["Node.js", "Socket.io", "Redis", "React"],
    links: { demo: "#", repo: "#" }
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
