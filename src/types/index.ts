export type ProjectCategory =
  | "Enterprise"
  | "Healthcare"
  | "Finance"
  | "Blockchain"
  | "AI"
  | "DevOps"
  | "Cloud"
  | "ETL"
  | "Microservices";

export type SkillCategory =
  | "Backend"
  | "Frontend"
  | "Cloud"
  | "DevOps"
  | "Databases"
  | "Blockchain"
  | "Artificial Intelligence"
  | "Automation"
  | "Architecture"
  | "ETL"
  | "Tools";

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  email: string;
  location: string;
  availability: string;
  resumePath: string;
  twitterHandle?: string;
  socials: SocialLink[];
  keywords: string[];
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Technology {
  name: string;
  category?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  role: string;
  year: number;
  client?: string;
  featured: boolean;
  coverImage: string;
  screenshots: string[];
  technologies: string[];
  overview: string;
  businessProblem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  results: string[];
  lessonsLearned: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  level: number;
  years?: number;
}

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  skills: Skill[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  credentialId?: string;
  url?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  details?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  coverImage: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}
