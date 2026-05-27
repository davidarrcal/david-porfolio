import type { Project } from '../data/portfolio';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-400/5">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-400/20"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Demo ↗
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            Código ↗
          </a>
        )}
      </div>
    </div>
  );
}