import type { ExperienceItem, EducationItem, ProjectItem, VoluntaryItem, NavItem } from '../../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'nav.about' },
  { id: 'education', label: 'nav.education' },
  { id: 'experience', label: 'nav.work' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'additional', label: 'nav.more' },
  { id: 'voluntary', label: 'nav.voluntary' },
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
    skills: ["React", "Shopify", "Next.js", "Performance", "JavaScript", "CSS"],
    responsibilities: [
      "experience.bevy.resp1",
      "experience.bevy.resp2",
      "experience.bevy.resp3",
      "experience.bevy.resp4"
    ],
    achievements: [
      "experience.bevy.achievement1",
      "experience.bevy.achievement2",
      "experience.bevy.achievement3"
    ],
    projectLinks: [
      {
        title: "experience.bevy.project1",
        url: "https://www.bevycommerce.com/rubino/"
      },
      {
        title: "experience.bevy.project2",
        url: "https://www.bevycommerce.com/burke-decor/"
      }
    ]
  },
  {
    id: 2,
    role: "experience.role.webdev",
    company: "experience.company.technest",
    period: "period.sep2024Present",
    description: "experience.desc.technest",
    skills: ["Next.js", "SCSS", "GSAP", "Accessibility", "TypeScript", "Google Sheets API"],
    responsibilities: [
      "experience.technest.resp1",
      "experience.technest.resp2",
      "experience.technest.resp3",
      "experience.technest.resp4"
    ],
    achievements: [
      "experience.technest.achievement1",
      "experience.technest.achievement2",
      "experience.technest.achievement3"
    ],
    projectLinks: [
      {
        title: "experience.technest.project1",
        url: "https://tech-nest.communicatingtech.com/"
      }
    ]
  }
];

export const ADDITIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "additionalExperience.role.customerService",
    company: "additionalExperience.company.ioSolutions",
    period: "period.2023-2025",
    description: "additionalExperience.desc.ioSolutions",
    skills: ["Customer Service", "Communication", "Multitasking", "Client Relations"]
  },
  {
    id: 2,
    role: "additionalExperience.role.gradAmbassador",
    company: "additionalExperience.company.gradStudies",
    period: "period.2024Present",
    description: "additionalExperience.desc.gradAmbassador",
    skills: ["Academic Outreach", "Student Support", "Communication", "Leadership"]
  },
  {
    id: 3,
    role: "additionalExperience.role.examInvigilator",
    company: "additionalExperience.company.examOffice",
    period: "period.2024Present",
    description: "additionalExperience.desc.examInvigilator",
    skills: ["Supervision", "Integrity Management", "Student Support", "Policy Compliance"]
  }
];

export const PROJECTS: ProjectItem[] = [
  // Developer Projects
  {
    id: 1,
    title: "projects.technest.title",
    category: "Developer",
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
    links: { demo: "https://tech-nest.communicatingtech.com/", repo: "https://github.com/fatemameem/technest-can-frontend" },
    screenshots: [
      "/screenshots/technest-ss1.webp",
      "/screenshots/technest-ss2.webp"
    ]
  },
  {
    id: 2,
    title: "projects.bdgsa.title",
    category: "Developer",
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
    links: { demo: "https://bdgsa.vercel.app/", repo: "https://github.com/fatemameem/kampus_frontend/tree/demo" },
    screenshots: [
      "/screenshots/bdgsa-ss1.webp",
      "/screenshots/bdgsa-ss2.webp"
    ]
  },
  // Security Projects
  // {
  //   id: 3,
  //   title: "projects.containerguard.title",
  //   category: "Security",
  //   issueNumber: "#03",
  //   problem: "projects.containerguard.problem",
  //   idea: "projects.containerguard.idea",
  //   solution: "projects.containerguard.solution",
  //   longDescription: "projects.containerguard.longDescription",
  //   features: [
  //     "features.containerIsolation",
  //     "features.attackSimulation",
  //     "features.readOnlyFilesystem"
  //   ],
  //   techStack: ["Docker", "Security Testing", "Network Isolation", "Privilege Control"],
  //   links: { demo: "#", repo: "#" },
  //   screenshots: [
  //     "/screenshots/docker-logo-blue.svg"
  //   ]
  // },
  {
    id: 3,
    title: "projects.malwaredefense.title",
    category: "Security",
    issueNumber: "#03",
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
      "/screenshots/malware-ss1.webp",
    ]
  },
  {
    id: 4,
    title: "projects.mealrecommender.title",
    category: "Academic Research",
    issueNumber: "#04",
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
      "/screenshots/meal-ss1.webp",
    ]
  },
  {
    id: 5,
    title: "projects.dllinjection.title",
    category: "Security",
    issueNumber: "#05",
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
    links: { demo: "https://github.com/fatemameem/InjecHunter", repo: "https://github.com/fatemameem/InjecHunter/blob/main/Malicious%20DLL%20Injection%20Detection%20using%20Ghidra-%20A%20Static%20Code%20Analysis%20Process.pdf" },
    screenshots: [
      "/screenshots/injechunter-ss3.webp",
      "/screenshots/injechunter-ss1.webp",
      "/screenshots/injechunter-ss2.webp"
    ]
  },
  {
    id: 6,
    title: "projects.marvelhangman.title",
    category: "Developer",
    issueNumber: "#06",
    problem: "projects.marvelhangman.problem",
    idea: "projects.marvelhangman.idea",
    solution: "projects.marvelhangman.solution",
    longDescription: "projects.marvelhangman.longDescription",
    features: [
      "features.characterNameGuessing",
      "features.dynamicWordRendering",
      "features.gameStateManagement",
      "features.responsiveGameplay",
      "features.vanillaJsImplementation"
    ],
    techStack: ["JavaScript", "HTML", "CSS"],
    links: { demo: "https://hangvel.vercel.app", repo: "https://github.com/fatemameem/Marvel-Hangman-with-JS-HTML-CSS" },
    screenshots: [
      "/screenshots/hangman-ss1.webp",
      "/screenshots/hangman-ss3.webp"
    ]
  }
];

export const VOLUNTARY: VoluntaryItem[] = [
  {
    id: 1,
    role: "voluntary.bdgsavp.role",
    organization: "voluntary.bdgsavp.org",
    description: "voluntary.bdgsavp.desc"
  },
  {
    id: 2,
    role: "voluntary.bracclubhr.role",
    organization: "voluntary.bracclubhr.org",
    description: "voluntary.bracclubhr.desc"
  },
  {
    id: 3,
    role: "voluntary.bracadventureit.role",
    organization: "voluntary.bracadventureit.org",
    description: "voluntary.bracadventureit.desc"
  }
];

export const ADDITIONAL = [
  "additional.speaking",
  "additional.writing",
  "additional.design"
];
