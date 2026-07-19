'use client';

import { useState } from 'react';

type Props = {
  label: string;
  value: string;
  href: string;
  copy?: boolean;
};

export default function ContactRow({ label, value, href, copy = false }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard API unavailable (older browsers, non-secure context) —
      // fall back to a hidden textarea + execCommand.
      const el = document.createElement('textarea');
      el.value = value;
      el.setAttribute('readonly', '');
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-2 border-b border-border py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">{label}</span>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="font-mono text-sm text-fg transition-colors hover:text-accent"
        >
          {value}
        </a>

        {copy && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${label} to clipboard`}
            className="rounded border border-border bg-surface px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {copied ? 'copied ✓' : 'copy'}
          </button>
        )}
      </div>
    </div>
  );
}
