import type { Metadata } from 'next';
import { achievements, experience, site, skills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Harshit Goyal — Electrical Engineering at IIT Delhi, Software/AI and VLSI engineer.',
};

export default function AboutPage() {
  return (
    <div className="container-site max-w-3xl py-16">
      <p className="section-title mb-3">cat about.md</p>
      <h1 className="font-mono text-3xl font-bold">About</h1>

      <div className="mt-6 space-y-4 leading-relaxed text-fg/90">
        <p>
          I’m an Electrical Engineering student at IIT Delhi (’26) who ships the kind of software
          most students only prototype: authenticated, observable, Dockerized platforms with CI/CD
          pipelines and live public demos — not notebooks and slide decks.
        </p>
        <p>
          On the software side, I’ve deployed three full-stack AI systems: a quant research
          platform for Indian equities with 20+ domain modules and a multi-LLM RAG assistant; a
          codebase-intelligence engine that turns any Git repo into a queryable knowledge graph;
          and a real-time gesture-to-image pipeline where you never type a prompt. Each one taught
          me a different hard problem — reliability engineering under flaky data sources, hybrid
          graph + vector retrieval, and streaming inference over webcam input.
        </p>
        <p>
          I'm currently an AI Engineer Intern at Samsung R&D Institute Delhi, training and
          fine-tuning Vision-Language Models and building a custom VLM-based solution for a
          market-driven product need.
        </p>
        <p>
          On the silicon side, I interned at Cadence Design Systems running RTL-to-Pre-CTS
          synthesis on Genus/Innovus and building Python and TCL tooling around the flow. The
          overlap is deliberate: EDA is software engineering applied to chips, and I want to work
          where the two meet — LLM platforms, developer tools, and EDA software.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={site.resumeSoftware} className="btn btn-primary">
          resume: software/AI ↓
        </a>
        <a href={site.resumeVlsi} className="btn">
          resume: VLSI ↓
        </a>
        <a href={`mailto:${site.email}`} className="btn">
          email me
        </a>
      </div>

      <section className="mt-14">
        <h2 className="section-title mb-6">skills</h2>
        <div className="space-y-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-2 font-mono text-sm text-fg">{group}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title mb-6">experience</h2>
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.company} className="card">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold">{e.company}</h3>
                <span className="font-mono text-xs text-muted">{e.period}</span>
              </div>
              <p className="text-sm text-muted">{e.role}</p>
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

      <section className="mt-14">
        <h2 className="section-title mb-6">achievements</h2>
        <ul className="space-y-2">
          {achievements.map((a) => (
            <li key={a.title} className="flex gap-3 text-fg/90">
              <span className="font-mono text-accent">▸</span>
              <span>
                <span className="font-semibold">{a.title}</span> — {a.detail}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
