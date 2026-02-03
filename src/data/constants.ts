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
    title: "projects.technest.title",
    category: "category.developer",
    issueNumber: "#01",
    problem: "projects.technest.problem",
    idea: "projects.technest.idea",
    solution: "projects.technest.solution",
    longDescription: "projects.technest.longDescription",
    features: [
      "features.dashboardRealtimeUpdates",
      "features.googleSheetsIntegration",
      "features.apiCaching",
      "features.globalStateManagement"
    ],
    techStack: ["Next.js", "TypeScript", "Google Sheets API", "Admin Dashboard", "PayloadCMS", "HTML", "Tailwind", "CSS", "Framer Motion"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=4",
      "https://picsum.photos/800/450?random=5"
    ]
  },
  {
    id: 2,
    title: "projects.bdgsa.title",
    category: "category.developer",
    issueNumber: "#02",
    problem: "projects.bdgsa.problem",
    idea: "projects.bdgsa.idea",
    solution: "projects.bdgsa.solution",
    longDescription: "projects.bdgsa.longDescription",
    features: [
      "features.roleBasedModeration",
      "features.adminDashboard",
      "features.mobileResponsive",
      "features.restApiIntegration"
    ],
    techStack: ["Next.js", "TypeScript", "JWT", "REST API", "Tailwind", "Framer Motion"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=1",
      "https://picsum.photos/800/450?random=2",
      "https://picsum.photos/800/450?random=3"
    ]
  },
  // Security Projects
  {
    id: 3,
    title: "projects.containerguard.title",
    category: "category.security",
    issueNumber: "#03",
    problem: "projects.containerguard.problem",
    idea: "projects.containerguard.idea",
    solution: "projects.containerguard.solution",
    longDescription: "projects.containerguard.longDescription",
    features: [
      "features.containerIsolation",
      "features.attackSimulation",
      "features.readOnlyFilesystem"
    ],
    techStack: ["Docker", "Security Testing", "Network Isolation", "Privilege Control"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=6",
      "https://picsum.photos/800/450?random=7"
    ]
  },
  {
    id: 4,
    title: "projects.malwaredefense.title",
    category: "category.security",
    issueNumber: "#04",
    problem: "projects.malwaredefense.problem",
    idea: "projects.malwaredefense.idea",
    solution: "projects.malwaredefense.solution",
    longDescription: "projects.malwaredefense.longDescription",
    features: [
      "features.reverseEngineering",
      "features.vulnerabilityAutomation",
      "features.legacyDefense"
    ],
    techStack: ["Ghidra", "Python", "Reverse Engineering", "Vulnerability Detection"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=8",
      "https://picsum.photos/800/450?random=9"
    ]
  },
  {
    id: 5,
    title: "projects.mealrecommender.title",
    category: "category.developer",
    issueNumber: "#05",
    problem: "projects.mealrecommender.problem",
    idea: "projects.mealrecommender.idea",
    solution: "projects.mealrecommender.solution",
    longDescription: "projects.mealrecommender.longDescription",
    features: [
      "features.eegAnalysis",
      "features.mlPrediction",
      "features.personalizedSuggestions"
    ],
    techStack: ["Machine Learning", "EEG Processing", "Random Forest", "XGBoost"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=10"
    ]
  },
  {
    id: 6,
    title: "projects.dllinjection.title",
    category: "category.security",
    issueNumber: "#06",
    problem: "projects.dllinjection.problem",
    idea: "projects.dllinjection.idea",
    solution: "projects.dllinjection.solution",
    longDescription: "projects.dllinjection.longDescription",
    features: [
      "features.staticBinaryAnalysis",
      "features.apiDetectionAutomation",
      "features.patternMatchingEngine",
      "features.datasetAnalysis",
      "features.reverseEngineeringWorkflow"
    ],
    techStack: ["Ghidra", "Python", "Static Analysis", "Binary Analysis", "Malware Detection"],
    links: { demo: "#", repo: "#" },
    screenshots: [
      "https://picsum.photos/800/450?random=11",
      "https://picsum.photos/800/450?random=12"
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
