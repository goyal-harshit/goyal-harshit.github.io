import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return project
    ? { title: project.title, description: project.oneLiner }
    : { title: 'Project' };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project || !project.caseStudy) notFound();

  return (
    <article className="container-site max-w-3xl py-16">
      <Link href="/projects/" className="font-mono text-xs text-muted hover:text-accent">
        ← ../projects
      </Link>
      <h1 className="mt-4 font-mono text-3xl font-bold">{project.title}</h1>
      <p className="mt-3 text-muted">{project.oneLiner}</p>

      <div className="mt-5 flex flex-wrap gap-3 font-mono text-sm">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            live demo ↗
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
            source ↗
          </a>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {project.caseStudy.map((section) => (
          <section key={section.heading}>
            <h2 className="section-title mb-4">{section.heading.toLowerCase().replace(/\s+/g, '_')}</h2>
            <div className="space-y-4">
              {section.body.map((para, i) => (
                <p key={i} className="leading-relaxed text-fg/90">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="section-title mb-4">highlights</h2>
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-fg/90">
                <span className="font-mono text-accent">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
