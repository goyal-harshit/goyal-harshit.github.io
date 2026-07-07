import { site } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name} · built with Next.js, deployed on GitHub Pages
        </p>
        <div className="flex gap-5 font-mono text-xs">
          <a href={`mailto:${site.email}`} className="text-muted hover:text-accent">
            email
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
            linkedin
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent">
            github
          </a>
          <a href={site.resumeSoftware} className="text-muted hover:text-accent">
            resume:sw/ai
          </a>
          <a href={site.resumeVlsi} className="text-muted hover:text-accent">
            resume:vlsi
          </a>
        </div>
      </div>
    </footer>
  );
}
