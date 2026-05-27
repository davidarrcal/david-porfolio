export const personal = {
  name: 'David',
  role: 'Desarrollador Web Junior',
  tagline: 'Graduado en Desarrollo de Aplicaciones Web. Construyo APIs limpias, interfaces funcionales y soluciones que aprenden conmigo.',
  bio: [
    'Soy desarrollador web con el Grado Superior en Desarrollo de Aplicaciones Web. Disfruto construyendo aplicaciones completas —desde la API hasta la interfaz— y me preocupo por escribir código limpio y mantenible.',
    'Durante mis estudios he trabajado con tecnologias del lado del servidor y del cliente, montando proyectos con Node.js, React y bases de datos SQL. Siempre estoy aprendiendo algo nuevo y buscando retos que me hagan mejorar.',
    'Cuando no estoy programando, sigo formandome en nuevas tecnologias y colaborando en proyectos open source.',
  ],
};

export const skills = [
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'React', category: 'framework' },
  { name: 'Node.js', category: 'runtime' },
  { name: 'HTML / CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'styling' },
  { name: 'SQL', category: 'database' },
  { name: 'Git', category: 'tool' },
  { name: 'REST APIs', category: 'skill' },
  { name: 'Docker', category: 'devops' },
  { name: 'Linux', category: 'tool' },
  { name: 'Python', category: 'language' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Java', category: 'language' },
  { name: 'Astro', category: 'frontend' }
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
    title: "MyMusic's",
    description: 'Plataforma web tipo SoundCloud para subir, escuchar y compartir musica. Panel de administracion, gestion de usuarios, canciones, playlists, comentarios, likes y reportes.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    demoUrl: 'https://a1.dawbaza.es/',
    repoUrl: 'https://github.com/davidarrcal/mymusics-JS-PHP-api-css-bootstrap',
  },
  {
    title: 'Portfolio Personal',
    description: 'Portfolio personal con Astro, React y Tailwind CSS. Efecto interactivo BorderGlow, formulario de contacto funcional, modo claro/oscuro y despliegue en Cloudflare Workers.',
    technologies: ['Astro', 'React', 'Tailwind CSS', 'Cloudflare Workers'],
    repoUrl: 'https://github.com/davidarrcal/david-porfolio',
  },
];

export const contact = {
  email: 'davidarrcal@gmail.com',
  github: 'https://github.com/davidarrcal',
  linkedin: 'https://www.linkedin.com/in/davidarredondocalder%C3%B2n/',
};

export const seo = {
  title: 'David | Desarrollador Web Junior',
  description: 'Portfolio de David — Desarrollador Web Junior graduado en DAW. React, Node.js, TypeScript y buenas practicas.',
  ogImage: '/og-image.png',
  url: 'https://david-porfolio.davidarrcal.workers.dev/',
};