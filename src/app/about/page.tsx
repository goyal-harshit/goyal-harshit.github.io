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
          I’m an Electrical Engineering student at IIT Delhi (’26) working across two tracks that
          usually don’t overlap: production-grade AI software and semiconductor design flows.
        </p>
        <p>
          On the software side, I build full-stack AI systems — a quant research platform for
          Indian equities, a codebase-intelligence engine backed by knowledge graphs, and a
          gesture-driven image generation pipeline. All shipped with CI, Docker, auth, observability,
          and live demos.
        </p>
        <p>
          On the silicon side, I interned at Cadence Design Systems running RTL-to-Pre-CTS synthesis
          on Genus/Innovus and building Python and TCL tooling around the flow. The overlap is the
          point: EDA is software engineering applied to chips.
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
