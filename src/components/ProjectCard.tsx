import Link from 'next/link';
import type { Project } from '@/lib/data';

const MAX_VISIBLE_STACK = 6;

export default function ProjectCard({ project }: { project: Project }) {
  const visibleStack = project.stack.slice(0, MAX_VISIBLE_STACK);
  const hiddenStackCount = project.stack.length - visibleStack.length;

  return (
    <article className="card group relative flex h-full flex-col">
      {/* Stretched link: makes the whole card clickable without nesting anchors. */}
      {project.caseStudy && (
        <Link
          href={`/projects/${project.slug}/`}
          aria-label={`Read the ${project.title} case study`}
          className="absolute inset-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
      )}

      <h3 className="font-mono text-lg font-semibold leading-snug text-fg [overflow-wrap:anywhere]">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted">{project.oneLiner}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {visibleStack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
        {hiddenStackCount > 0 && <span className="chip">+{hiddenStackCount}</span>}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-5 font-mono text-xs">
        <div className="flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-accent hover:underline"
            >
              demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-muted transition-colors hover:text-accent"
            >
              code ↗
            </a>
          )}
        </div>
        {project.caseStudy && (
          <span className="text-accent group-hover:underline">read case study →</span>
        )}
      </div>
    </article>
  );
}
