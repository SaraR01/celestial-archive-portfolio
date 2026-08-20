import type { BookDefinition, EducationItem, ExperienceItem, ProjectItem, SkillGroup } from '../types/content';

export const booksEn: BookDefinition[] = [
  { id: 'about', number: '01', title: 'About', subtitle: 'Story and purpose', tone: 'cream' },
  { id: 'experience', number: '02', title: 'Experience', subtitle: 'Professional journey', tone: 'terracotta' },
  { id: 'projects', number: '03', title: 'Projects', subtitle: 'Ideas I build', tone: 'charcoal' },
  { id: 'skills', number: '04', title: 'Skills', subtitle: 'Knowledge and method', tone: 'sand' },
  { id: 'education', number: '05', title: 'Education', subtitle: 'Learning and discipline', tone: 'copper' },
  { id: 'contact', number: '06', title: 'Contact', subtitle: 'The next chapter', tone: 'brown' },
];

export const aboutEn = {
  chapter: 'CHAPTER I',
  title: 'About me',
  intro:
    'Systems Engineer with a structured, curious and imaginative way of thinking. Technology motivates me because there is always something new to learn, research or solve.',
  second:
    'I prefer to understand a problem deeply, explore alternatives and then build a solution with intention.',
  traits: 'INTENSE · RESILIENT · DREAMER · QUIET · LITERAL',
  quote: '“I am proud of myself.”',
  quoteBody:
    'Not as a finished destination, but as the sum of every challenge, every lesson and every time I decided to go a little further.',
  methodTitle: 'Understand before building',
  method: [
    ['01', 'UNDERSTAND', 'Understand the problem and its context before deciding.'],
    ['02', 'RESEARCH', 'Compare alternatives, risks and possibilities.'],
    ['03', 'ORGANIZE', 'Turn information into a clear and executable plan.'],
    ['04', 'SOLVE', 'Build, test, adjust and learn from the result.'],
  ],
};

export const experienceEn: ExperienceItem[] = [
  {
    period: 'Oct 2025 — Jun 2026',
    role: 'E-Commerce Consultant',
    company: 'Componentes El Orbe',
    focus: 'Technical coordination, IT operations, cybersecurity, AWS, incident management and process improvement.',
    points: [
      'Coordinated cybersecurity, incident and remediation workstreams.',
      'Tracked tasks, defects, findings, blockers and risks with Jira and Xray.',
      'Monitored AWS services and supported operational continuity and escalation.',
      'Performed technical and operational audits aligned with ISO 27001 principles.',
      'Supported SDLC, testing, changes, releases and implementations.',
    ],
    tools: ['Jira', 'Xray', 'AWS', 'ServiceNow', 'ISO 27001', 'SDLC'],
  },
  {
    period: 'Jan 2023 — Dec 2024',
    role: 'Systems Engineer focused on Web Development',
    company: 'Tavuel',
    focus: 'End-to-end web development, maintenance, integrations and change support.',
    points: [
      'Approximately three projects of different sizes, including greenfield, existing and legacy systems.',
      'Angular 18, React and TypeScript on frontend; Node.js/NestJS, REST APIs, GraphQL and Prisma on backend.',
      'Integrations with Google APIs/Maps, Firebase, email, ERP and Costa Rica tax services.',
      'MySQL, SQL Server, MongoDB and Firebase.',
      'Testing, debugging, Git/GitHub, Pull Requests, code review and post-deployment validation.',
    ],
    tools: ['Angular 18', 'React', 'TypeScript', 'Node.js', 'NestJS', 'SQL', 'Git/GitHub'],
  },
  {
    period: '2019',
    role: 'Technical Support Intern',
    company: 'Clínica UNIBE',
    focus: 'On-site and remote support, hardware, software, networking and operational continuity.',
    points: [],
    tools: ['Windows', 'Networking', 'Hardware'],
  },
  {
    period: '2018',
    role: 'IT Support Intern',
    company: 'Servicio Fitosanitario del Estado',
    focus: 'Network configuration, equipment maintenance, UPS and hardware diagnostics.',
    points: [],
    tools: ['Networking', 'Hardware', 'UPS'],
  },
];

export const projectsEn: ProjectItem[] = [
  {
    number: '01',
    title: 'Enterprise web applications',
    status: 'real',
    stack: ['Angular 18', 'React', 'TypeScript', 'Node.js', 'APIs'],
    description:
      'Real end-to-end development experience across new, existing and legacy applications. The public version omits confidential information.',
    points: ['Complete features', 'Async flows', 'Maps and image processing', 'Refactoring and maintenance'],
  },
  {
    number: '02',
    title: 'Cyber Risk Intelligence',
    status: 'planned',
    stack: ['Power BI', 'Python', 'Cybersecurity'],
    description: 'Portfolio project — planned.',
  },
  {
    number: '03',
    title: 'Data & BI',
    status: 'planned',
    stack: ['Power BI', 'Analytics'],
    description: 'Portfolio project — planned.',
  },
  {
    number: '04',
    title: 'Applied Security',
    status: 'planned',
    stack: ['Cybersecurity', 'Research'],
    description: 'Portfolio project — planned.',
  },
];

export const skillsEn: SkillGroup[] = [
  { title: 'Frontend', level: 'professional', items: ['Angular 18','React','TypeScript','JavaScript','HTML5','CSS3','SASS/SCSS','Responsive','Bootstrap','Tailwind','Material'] },
  { title: 'Backend & APIs', level: 'professional', items: ['Node.js','NestJS','REST APIs','GraphQL','Prisma','Validation','Versioning','Error handling'] },
  { title: 'Data', level: 'professional', items: ['MySQL','SQL Server','MongoDB','Firebase','SQL','JOINs','Subqueries','CRUD','Data modeling'] },
  { title: 'Project & Delivery', level: 'professional', items: ['Jira','Xray','ServiceNow','Scrum','Agile','SDLC','Incident Management','Reporting','Stakeholders'] },
  { title: 'Cloud & Operations', level: 'professional', items: ['AWS Monitoring','AWS Lambda reviews','Troubleshooting','Windows','Linux','Networking'] },
  { title: 'Cybersecurity', level: 'practical', items: ['Vulnerability review','ISO 27001','OWASP Top 10','Basic IAM','Authentication','Tokens','Sessions','Encryption'] },
  { title: 'Data & BI', level: 'practical', items: ['Power BI Level I','Power BI Level II','Data analysis'] },
  { title: 'Complementary training', level: 'complementary', items: ['Ethical Hacking','Cryptography','Cybersecurity Principles','GitHub Actions','CI/CD concepts'] },
];

export const educationEn: EducationItem[] = [
  { title: 'Information Systems Engineering', institution: 'Universidad Internacional de las Américas (UIA)', year: '2025', note: 'Cum Laude with Honors' },
  { title: 'Cybersecurity Specialization', institution: 'Universidad Fidélitas', year: '2025', note: '96 hours' },
  { title: 'Data Analysis with Power BI — Level II', institution: 'Universidad de Costa Rica (UCR)', year: '2025' },
  { title: 'Data Analysis with Power BI — Level I', institution: 'Universidad de Costa Rica (UCR)', year: '2025' },
  { title: 'Technical High School Diploma in IT Support', institution: 'Colegio Técnico Profesional de Pavas', year: '2019' },
];

export const certificationsEn = [
  'Scrum Fundamentals Certified — VMEdu · 2022',
  'React Development — Udemy · 2023',
  'Professional Communication in English — Rocket Girls · 2025',
  'Advanced Conversational English — Academia Europea · 2021',
  'Ethical Hacking — Universidad Fidélitas · 2025',
  'Cryptography — Universidad Fidélitas · 2025',
  'Cybersecurity Principles — Universidad Fidélitas · 2025',
];
