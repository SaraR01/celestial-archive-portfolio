export type Language = 'es' | 'en';
export type BookId =
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'contact';

export type SkillLevel = 'professional' | 'practical' | 'complementary';

export interface BookDefinition {
  id: BookId;
  number: string;
  title: string;
  subtitle: string;
  tone: 'cream' | 'terracotta' | 'charcoal' | 'sand' | 'copper' | 'brown';
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  client?: string;
  focus: string;
  indicators?: Array<{ value: string; label: string }>;
  points: string[];
  results: string[];
  caseNumbers?: string[];
  kind: 'primary' | 'internship';
  tools: string[];
}

export interface SkillGroup {
  title: string;
  level: SkillLevel;
  items: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
  note?: string;
}

export interface PlannedProject {
  number: string;
  title: string;
  status: 'planned';
  stack: string[];
  description: string;
}

export interface PublicProject {
  number: string;
  title: string;
  status: 'completed';
  problem: string;
  solution: string;
  architecture: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProfessionalCase {
  number: string;
  title: string;
  status: 'case';
  group: string;
  category: string;
  summary: string;
  context: string;
  objective?: string;
  scope?: string[];
  strategy?: string[];
  coordination?: string[];
  challengeLabel: string;
  challenges: string[];
  participation: string[];
  result: string;
  tools: string[];
  subtitle?: string;
  process?: string[];
  flow?: string[];
  metaLabel?: string;
  meta?: string;
}

export type ProjectItem = PlannedProject | ProfessionalCase | PublicProject;
