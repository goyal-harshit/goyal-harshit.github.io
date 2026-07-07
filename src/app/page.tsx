import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { achievements, experience, projects, site, stats } from '@/lib/data';

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="container-site">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="section-title mb-4">whoami</p>
        <h1 className="cursor-blink font-mono text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">{site.name}</span>
        </h1>
        <p className="mt-3 font-mono text-sm text-muted">{site.role}</p>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-fg">{site.tagline}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{site.sub}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.resumeSoftware} className="btn btn-primary">
            resume: software/AI ↓
          </a>
          <a href={site.resumeVlsi} className="btn">
            resume: VLSI ↓
          </a>
          <a href={`mailto:${site.email}`} className="btn">
            contact
          </a>
        </div>

        {/* Proof strip */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-4 py-4">
              <p className="font-mono text-xl font-bold text-accent">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Dual-track CTAs */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link href="/software/" className="card group">
            <p className="font-mono text-xs text-muted">track 01</p>
            <h2 className="mt-1 font-mono text-xl font-semibold group-hover:text-accent">
              Software / AI →
            </h2>
            <p className="mt-2 text-sm text-muted">
              Three deployed platforms — quant research, codebase intelligence, gesture-driven
              generation — each with auth, observability, CI/CD, and a live demo.
            </p>
          </Link>
          <Link href="/vlsi/" className="card group">
            <p className="font-mono text-xs text-muted">track 02</p>
            <h2 className="mt-1 font-mono text-xl font-semibold group-hover:text-accent">
              VLSI / Semiconductor →
            </h2>
            <p className="mt-2 text-sm text-muted">
              RTL-to-Pre-CTS synthesis at Cadence Design Systems — Genus/Innovus flows, Python
              netlist tooling, TCL automation.
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
            <div key={e.company} className="card">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold">{e.company}</h3>
                  <p className="text-sm text-muted">{e.role}</p>
                </div>
                <span className="font-mono text-xs text-muted">{e.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-fg/90">
                    <span className="font-mono text-accent">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12">
        <p className="section-title mb-8">