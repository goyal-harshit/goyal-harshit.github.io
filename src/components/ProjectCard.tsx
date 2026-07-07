import Link from 'next/link';
import type { Project } from '@/lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <article className="card flex h-full flex-col">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h3 className="font-mono text-lg font-semibold text-fg">{project.title}</h3>
        <div className="flex shrink-0 gap-3 font-mono text-xs">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent"
            >
              code ↗
            </a>
          )}
        </div>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted">{project.oneLiner}</p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.stack.slice(0, 6).map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
        {project.stack.length > 6 && <span className="chip">+{project.stack.length - 6}</span>}
      </div>
      {project.caseStudy && (
        <p className="mt-4 font-mono text-xs text-accent">read case study →</p>
      )}
    </article>
  );

  return project.caseStudy ? (
    <Link href={`/projects/${project.slug}/`} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}
