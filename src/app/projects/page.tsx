import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Software and AI projects — quant platforms, codebase intelligence, gesture-driven image generation, and competition ML.',
};

export default function ProjectsPage() {
  return (
    <div className="container-site py-16">
      <p className="section-title mb-3">ls ./projects</p>
      <h1 className="font-mono text-3xl font-bold">Projects</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Production-style systems with CI, Docker, tests, and live demos — not toy scripts.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
