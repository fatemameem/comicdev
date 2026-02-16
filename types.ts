export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  responsibilities?: string[];
  achievements?: string[];
  projectLinks?: {
    title: string;
    url: string;
  }[];
}

export interface EducationItem {
  id: number;
  degree: string;
  school: string;
  year: string;
  details?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: 'Developer' | 'Security' | 'Academic Research';
  issueNumber: string;
  problem: string;
  idea: string;
  solution: string;
  longDescription?: string;
  features?: string[];
  techStack: string[];
  links: {
    demo: string;
    repo: string;
  };
  screenshots: string[];
}

export interface VoluntaryItem {
  id: number;
  role: string;
  organization: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}