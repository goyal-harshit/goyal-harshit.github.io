import type { Metadata } from 'next';
import { site, skills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'VLSI / Semiconductor',
  description:
    'VLSI track — RTL-to-Pre-CTS synthesis at Cadence Design Systems, Genus/Innovus flows, Python netlist tooling, TCL automation.',
};

const flow = [
  { stage: 'RTL', detail: 'Verilog design entry, lint, and constraints' },
  { stage: 'Synthesis', detail: 'Logic synthesis on Cadence Genus — mapping, optimization, DFT' },
  { stage: 'STA', detail: 'Static timing analysis, constraint debugging, timing closure' },
  { stage: 'Pre-CTS', detail: 'Floorplanning and placement on Innovus up to clock-tree synthesis' },
];

const work = [
  {
    title: 'RTL-to-Pre-CTS synthesis flow',
    detail:
      'Ran and debugged complete synthesis flows on Cadence Genus and Innovus — from RTL elaboration through placement — analyzing timing, area, and power trade-offs across constraint configurations.',
  },
  {
    title: 'Python netlist analysis tooling',
    detail:
      'Built Python tooling to parse and analyze synthesized netlists: cell distribution, hierarchy stats, and structural checks that would otherwise require manual inspection in the GUI.',
  },
  {
    title: 'TCL flow automation',
    detail:
      'Automated repetitive synthesis-flow steps with TCL scripting inside the Cadence toolchain, reducing manual iteration time across runs.',
  },
];

export default function VlsiPage() {
  return (
    <div className="container-site max-w-3xl py-16">
      <p className="section-title mb-3">cd ./vlsi</p>
      <h1 className="font-mono text-3xl font-bold">VLSI / Semiconductor</h1>
      <p className="mt-3 text-muted">
        ASIC Synthesis / EDA Software Intern at{' '}
        <span className="text-fg">Cadence Design Systems</span> (2025). This work lives in
        proprietary flows rather than public repos — this page is the portfolio.
      </p>
      <a href={site.resumeVlsi} className="btn btn-primary mt-6">
        download VLSI resume ↓
      </a>

      <section className="mt-14">
        <h2 className="section-title mb-6">flow_experience</h2>
        <div className="space-y-3">
          {flow.map((f, i) => (
            <div key={f.stage} className="card flex items-start gap-4 py-4">
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
              <div>
                <h3 className="font-mono text-sm font-semibold text-accent">{f.stage}</h3>
                <p className="mt-1 text-sm text-muted">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title mb-6">internship_work</h2>
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
        <h2 className="section-title mb-6">skills</h2>
        <div className="flex flex-wrap gap-1.5">
          {[...skills.Semiconductor, 'TCL', 'Verilog', 'Python'].map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
