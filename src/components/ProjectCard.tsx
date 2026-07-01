import type { Project } from '../data/portfolio';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <div className="group glass flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] h-full">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-pink-400 transition-colors duration-300">

            {project.title}
          </h3>
          <span className="rounded-full dark:bg-violet-500/10 bg-violet-200/50 px-3 py-1 text-xs font-bold dark:text-violet-300 text-violet-700 shrink-0">
            #{index}
          </span>
        </div>
        <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
          <span key={tech} className="project-tech-tag">
            {tech}
          </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.demoUrls?.map((url, i) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-sm !px-4 !py-2 !rounded-xl"
            >
              Demo {project.demoUrls!.length > 1 ? i + 1 : ''} ↗
            </a>
          ))}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !text-sm !px-4 !py-2 !rounded-xl"
            >
              Código ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}