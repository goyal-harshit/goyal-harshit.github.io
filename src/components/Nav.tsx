import Link from 'next/link';
import { site } from '@/lib/data';

const links = [
  { href: '/software/', label: 'software' },
  { href: '/vlsi/', label: 'vlsi' },
  { href: '/projects/', label: 'projects' },
  { href: '/about/', label: 'about' },
  { href: '/about/#contact', label: 'contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="container-site flex h-14 items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold text-fg hover:text-accent">
          harshit<span className="text-accent">@</span>iitd<span className="text-muted">:~$</span>
        </Link>
        <div className="flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              ./{l.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
            aria-label="GitHub profile"
          >
            github ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
