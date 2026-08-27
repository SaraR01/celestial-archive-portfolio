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
  focus: string;
  points: string[];
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

export interface ProfessionalCase {
  number: string;
  title: string;
  status: 'case';
  group: string;
  category: string;
  summary: string;
  context: string;
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

export type ProjectItem = PlannedProject | ProfessionalCase;
