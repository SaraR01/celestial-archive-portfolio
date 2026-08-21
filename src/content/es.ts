import type { BookDefinition, EducationItem, ExperienceItem, ProjectItem, SkillGroup } from '../types/content';

export const homeEs = {
  prologue: 'PRÓLOGO / 00',
  title: 'El Archivo Celestial',
  description:
    'Tecnología, investigación y propósito. Una colección de capítulos construidos con curiosidad, disciplina y la decisión de ir siempre un poco más allá.',
  cta: 'EXPLORAR EL ARCHIVO',
  quote: '“Siempre hay algo nuevo que descubrir.”',
} as const;

export const booksEs: BookDefinition[] = [
  { id: 'about', number: '01', title: 'Sobre mí', subtitle: 'Historia y propósito', tone: 'cream' },
  { id: 'experience', number: '02', title: 'Experiencia', subtitle: 'Trayectoria profesional', tone: 'terracotta' },
  { id: 'projects', number: '03', title: 'Proyectos', subtitle: 'Ideas que construyo', tone: 'charcoal' },
  { id: 'skills', number: '04', title: 'Habilidades', subtitle: 'Conocimiento y método', tone: 'sand' },
  { id: 'education', number: '05', title: 'Formación', subtitle: 'Aprendizaje y disciplina', tone: 'copper' },
  { id: 'contact', number: '06', title: 'Contacto', subtitle: 'El siguiente capítulo', tone: 'brown' },
];

export const aboutEs = {
  chapter: 'CAPÍTULO I',
  title: 'Sobre mí',
  intro:
    'Ingeniera en Sistemas con una forma de pensar estructurada, curiosa e imaginativa. Me motiva la tecnología porque siempre hay algo nuevo que aprender, investigar o resolver.',
  second:
    'Prefiero entender un problema a fondo, explorar alternativas y después construir una solución con intención.',
  traits: 'INTENSA · LUCHADORA · SOÑADORA · CALLADA · LITERAL',
  quote: '“Estoy orgullosa de mí.”',
  quoteBody:
    'No como una meta terminada, sino como la suma de cada reto, cada aprendizaje y cada vez que decidí hacer un poco más.',
  methodTitle: 'Entender antes de construir',
  method: [
    ['01', 'ENTENDER', 'Comprender el problema y el contexto antes de decidir.'],
    ['02', 'INVESTIGAR', 'Comparar alternativas, riesgos y posibilidades.'],
    ['03', 'ORGANIZAR', 'Transformar información en un plan claro y ejecutable.'],
    ['04', 'RESOLVER', 'Construir, probar, ajustar y aprender del resultado.'],
  ],
};

export const experienceEs: ExperienceItem[] = [
  {
    period: 'Oct 2025 — Jun 2026',
    role: 'Consultora E-Commerce',
    company: 'Componentes El Orbe',
    focus: 'Coordinación técnica, operaciones TI, ciberseguridad, AWS, incident management y mejora de procesos.',
    points: [
      'Coordinación y seguimiento de workstreams de ciberseguridad, incidentes y remediación.',
      'Trazabilidad de tareas, defectos, hallazgos, bloqueos y riesgos mediante Jira y Xray.',
      'Monitoreo de servicios AWS, continuidad operativa y escalamiento.',
      'Auditorías técnicas y operativas alineadas con principios de ISO 27001.',
      'Soporte al SDLC, pruebas, cambios, releases e implementaciones.',
    ],
    tools: ['Jira', 'Xray', 'AWS', 'ServiceNow', 'ISO 27001', 'SDLC'],
  },
  {
    period: 'Ene 2023 — Dic 2024',
    role: 'Ingeniera en Sistemas enfocada en Desarrollo Web',
    company: 'Tavuel',
    focus: 'Desarrollo web end-to-end, mantenimiento, integraciones y soporte a cambios.',
    points: [
      'Aproximadamente tres proyectos de distinto tamaño, incluyendo proyecto desde cero, aplicación existente y sistema legado.',
      'Angular 18, React y TypeScript en frontend; Node.js/NestJS, REST APIs, GraphQL y Prisma en backend.',
      'Integraciones con Google APIs/Maps, Firebase, correo, ERP y API de Hacienda.',
      'MySQL, SQL Server, MongoDB y Firebase.',
      'Testing, debugging, Git/GitHub, Pull Requests, code review y validación posterior a deployments.',
    ],
    tools: ['Angular 18', 'React', 'TypeScript', 'Node.js', 'NestJS', 'SQL', 'Git/GitHub'],
  },
  {
    period: '2019',
    role: 'Pasante de Soporte Técnico',
    company: 'Clínica UNIBE',
    focus: 'Soporte presencial y remoto, hardware, software, red y continuidad operativa.',
    points: [],
    tools: ['Windows', 'Networking', 'Hardware'],
  },
  {
    period: '2018',
    role: 'Pasante de Soporte TI',
    company: 'Servicio Fitosanitario del Estado',
    focus: 'Configuración de red, mantenimiento de equipos, UPS y diagnóstico de hardware.',
    points: [],
    tools: ['Networking', 'Hardware', 'UPS'],
  },
];

export const projectsEs: ProjectItem[] = [
  {
    number: '01',
    title: 'Aplicaciones web empresariales',
    status: 'real',
    stack: ['Angular 18', 'React', 'TypeScript', 'Node.js', 'APIs'],
    description:
      'Experiencia real de desarrollo end-to-end en aplicaciones nuevas, existentes y legado. La versión pública evita información confidencial.',
    points: [
      'Construcción de funcionalidades completas.',
      'Procesos asíncronos y flujos dependientes.',
      'Mapas, imágenes e integraciones.',
      'Refactorización y mantenimiento.',
    ],
  },
  {
    number: '02',
    title: 'Cyber Risk Intelligence',
    status: 'planned',
    stack: ['Power BI', 'Python', 'Ciberseguridad'],
    description: 'Proyecto de portafolio por desarrollar.',
  },
  {
    number: '03',
    title: 'Data & BI',
    status: 'planned',
    stack: ['Power BI', 'Análisis'],
    description: 'Proyecto de portafolio por desarrollar.',
  },
  {
    number: '04',
    title: 'Seguridad aplicada',
    status: 'planned',
    stack: ['Ciberseguridad', 'Investigación'],
    description: 'Proyecto de portafolio por desarrollar.',
  },
];

export const skillsEs: SkillGroup[] = [
  {
    title: 'Frontend',
    level: 'professional',
    items: ['Angular 18', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SASS/SCSS', 'Responsive', 'Bootstrap', 'Tailwind', 'Material'],
  },
  {
    title: 'Backend & APIs',
    level: 'professional',
    items: ['Node.js', 'NestJS', 'REST APIs', 'GraphQL', 'Prisma', 'Validaciones', 'Versionamiento', 'Error handling'],
  },
  {
    title: 'Datos',
    level: 'professional',
    items: ['MySQL', 'SQL Server', 'MongoDB', 'Firebase', 'SQL', 'JOINs', 'Subqueries', 'CRUD', 'Modelado'],
  },
  {
    title: 'Gestión & Delivery',
    level: 'professional',
    items: ['Jira', 'Xray', 'ServiceNow', 'Scrum', 'Agile', 'SDLC', 'Incident Management', 'Reporting', 'Stakeholders'],
  },
  {
    title: 'Cloud & Operaciones',
    level: 'professional',
    items: ['AWS Monitoring', 'AWS Lambda reviews', 'Troubleshooting', 'Windows', 'Linux', 'Networking'],
  },
  {
    title: 'Ciberseguridad',
    level: 'practical',
    items: ['Vulnerability review', 'ISO 27001', 'OWASP Top 10', 'IAM básico', 'Autenticación', 'Tokens', 'Sesiones', 'Encriptación'],
  },
  {
    title: 'Data & BI',
    level: 'practical',
    items: ['Power BI Nivel I', 'Power BI Nivel II', 'Análisis de datos'],
  },
  {
    title: 'Formación complementaria',
    level: 'complementary',
    items: ['Ethical Hacking', 'Criptografía', 'Principios de Ciberseguridad', 'GitHub Actions', 'CI/CD conceptual'],
  },
];

export const educationEs: EducationItem[] = [
  {
    title: 'Ingeniería en Sistemas de Información',
    institution: 'Universidad Internacional de las Américas (UIA)',
    year: '2025',
    note: 'Cum Laude con Honores',
  },
  {
    title: 'Especialización en Ciberseguridad',
    institution: 'Universidad Fidélitas',
    year: '2025',
    note: '96 horas',
  },
  {
    title: 'Análisis de Datos con Power BI — Nivel II',
    institution: 'Universidad de Costa Rica (UCR)',
    year: '2025',
  },
  {
    title: 'Análisis de Datos con Power BI — Nivel I',
    institution: 'Universidad de Costa Rica (UCR)',
    year: '2025',
  },
  {
    title: 'Técnico Medio en Soporte de Tecnologías de Información',
    institution: 'Colegio Técnico Profesional de Pavas',
    year: '2019',
  },
];

export const certificationsEs = [
  'Scrum Fundamentals Certified — VMEdu · 2022',
  'React Development — Udemy · 2023',
  'Professional Communication in English — Rocket Girls · 2025',
  'Advanced Conversational English — Academia Europea · 2021',
  'Ethical Hacking — Universidad Fidélitas · 2025',
  'Criptografía — Universidad Fidélitas · 2025',
  'Principios de Ciberseguridad — Universidad Fidélitas · 2025',
];
