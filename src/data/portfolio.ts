export const personal = {
  name: 'David',
  role: 'Desarrollador Backend',
  tagline: 'Especializado en construir APIs robustas, servicios escalables y soluciones del lado del servidor con Astro, React y Tailwind CSS.',
  bio: [
    'Soy un desarrollador backend con pasión por crear soluciones eficientes y escalables. Me especializo en el desarrollo del lado del servidor, diseñando APIs y arquitecturas que soportan aplicaciones modernas.',
    'Mi experiencia abarca desde bases de datos hasta despliegue en la nube, siempre buscando escribir código limpio y mantenible. Disfruto resolver problemas complejos y optimizar el rendimiento de las aplicaciones.',
    'Cuando no estoy programando, sigo aprendiendo nuevas tecnologías y contribuyendo a proyectos open source.',
  ],
};

export const skills = [
  { name: 'Astro', category: 'framework' },
  { name: 'React', category: 'framework' },
  { name: 'Tailwind CSS', category: 'styling' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Node.js', category: 'runtime' },
  { name: 'Python', category: 'language' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Docker', category: 'devops' },
  { name: 'Git', category: 'tool' },
  { name: 'Cloudflare Workers', category: 'platform' },
  { name: 'REST APIs', category: 'skill' },
  { name: 'Linux', category: 'tool' },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'Proyecto Alpha',
    description: 'API REST de alto rendimiento para gestión de datos en tiempo real. Arquitectura modular con autenticación y caché distribuida.',
    technologies: ['Node.js', 'PostgreSQL', 'Docker'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Proyecto Beta',
    description: 'Dashboard interactivo con visualización de datos en tiempo real y panel de administración con control de roles.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Proyecto Gamma',
    description: 'Sitio web estático de alto rendimiento con generación incremental y despliegue en edge.',
    technologies: ['Astro', 'Cloudflare Workers', 'Git'],
    demoUrl: '#',
    repoUrl: '#',
  },
];

export const contact = {
  email: 'tu-email@ejemplo.com',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://linkedin.com/in/tu-usuario',
};

export const seo = {
  title: 'David | Desarrollador Backend',
  description: 'Portfolio de David — Desarrollador Backend especializado en Astro, React y Tailwind CSS. APIs robustas, servicios escalables y soluciones del lado del servidor.',
  ogImage: '/og-image.png',
  url: 'https://tu-dominio.com',
};