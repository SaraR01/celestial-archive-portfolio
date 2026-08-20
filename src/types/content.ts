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

export interface ProjectItem {
  number: string;
  title: string;
  status: 'real' | 'planned';
  stack: string[];
  description: string;
  points?: string[];
}
