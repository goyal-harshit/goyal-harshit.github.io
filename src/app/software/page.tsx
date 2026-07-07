import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects, site, skills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Software / AI',
  description:
    'Software/AI track — three deployed full-stack AI platforms, LLM/RAG pipelines, knowledge graphs, and consulting-scale technology work at PwC.',
};

const work = [
  {
    title: 'Cadence Design Systems — EDA Software Intern (2025)',
    detail:
      'Software engineering inside the chip-design toolchain: built Python tooling to parse and analyze synthesized netlists (cell distribution, hierarchy stats, structural checks) and automated multi-step synthesis flows with TCL — replacing manual GUI iteration with scripted, repeatable runs.',
  },
  {
    title: 'PwC India — Technology Consulting Intern (2024)',
    detail:
      'Digitized financial workflows for a government agriculture platform serving a 130M+ farmer user base — requirements analysis, process mapping, and technology solution design at national scale.',
  },
  {
    title: 'Cape Peninsula University of Technology — AI Research Intern (2023–24)',
    detail:
      'Researched AI-enabled smart microgrids in South Africa — applying ML to energy forecasting and grid optimization problems in a live research group.',
  },
  {
    title: 'Independent — three deployed AI platforms (2025–26)',
    detail:
      'Designed, built, and deployed QuantAI, the Codebase Intelligence Platform, and IntuitivePromptEngine end-to-end: FastAPI backends, Next.js frontends, Docker packaging, CI/CD, JWT auth, structured logging, and Prometheus metrics. Each ships with a live public demo.',
  },
];

export default function SoftwarePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="container-site max-w-3xl py-16">
      <p className="section-title mb-3">cd ./software</p>
      <h1 className="font-mono text-3xl font-bold">Software / AI</h1>
      <p className="mt-3 text-muted">
        Production systems, not prototypes — every platform below runs live with auth,
        observability, and CI/CD. Focus areas: LLM/RAG pipelines, knowledge-graph retrieval,
        real-time inference, and reliability engineering.
      </p>
      <a href={site.resumeSoftware} className="btn btn-primary mt-6">
        download software/AI resume ↓
      </a>

      <section className="mt-14">
        <h2 className="section-title mb-6">experience</h2>
        <div className="space-y-4">
          {work.map((w) => (
            <div key={w.title} className="card">
              <h3 className="font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title mb-6">deployed_platforms</h2>
        <div className="grid gap-5">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <Link href="/projects/" className="btn mt-6">
          all projects →
        </Link>
      </section>

      <section className="mt-14">
        <h2 className="section-title mb-6">skills</h2>
        <div className="space-y-5">
          {(['Languages', 'AI/ML', 'Backend & Infra'] as const).map((group) => (
            <div key={group}>
              <h3 className="mb-2 font-mono text-sm text-fg">{group}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills[group].map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
