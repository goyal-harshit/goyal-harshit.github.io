import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { achievements, experience, projects, site } from '@/lib/data';

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="container-site">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="section-title mb-4">whoami</p>
        <h1 className="cursor-blink font-mono text-4xl font-bold sm:text-5xl">{site.name}</h1>
        <p className="mt-3 font-mono text-sm text-muted">{site.role}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg/90">{site.tagline}</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Full-stack AI platforms · LLM/RAG pipelines · knowledge-graph code analysis ·
          RTL-to-Pre-CTS synthesis automation.
        </p>

        {/* Dual-track CTAs */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link href="/projects/" className="card group">
            <p className="font-mono text-xs text-muted">track 01</p>
            <h2 className="mt-1 font-mono text-xl font-semibold group-hover:text-accent">
              Software / AI →
            </h2>
            <p className="mt-2 text-sm text-muted">
              Production AI systems: quant platforms, codebase intelligence, gesture-driven
              generation.
            </p>
          </Link>
          <Link href="/vlsi/" className="card group">
            <p className="font-mono text-xs text-muted">track 02</p>
            <h2 className="mt-1 font-mono text-xl font-semibold group-hover:text-accent">
              VLSI / Semiconductor →
            </h2>
            <p className="mt-2 text-sm text-muted">
              RTL-to-Pre-CTS synthesis at Cadence: Genus/Innovus flows, netlist tooling, TCL
              automation.
            </p>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-12">
        <p className="section-title mb-8">featured_projects</p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <Link href="/projects/" className="btn mt-8">
          view all projects →
        </Link>
      </section>

      {/* Experience */}
      <section className="py-12">
        <p className="section-title mb-8">experience</p>
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.company} className="card flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-semibold">{e.company}</h3>
                <p className="text-sm text-muted">{e.role}</p>
              </div>
              <span className="font-mono text-xs text-muted">{e.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12">
        <p className="section-title mb-8">achievements</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {achievements.map((a) => (
            <div key={a.title} className="card">
              <h3 className="font-mono text-sm font-semibold text-accent">{a.title}</h3>
              <p className="mt-1 text-sm text-muted">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
