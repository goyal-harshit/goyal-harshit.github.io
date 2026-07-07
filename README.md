# goyal-harshit.github.io

Personal portfolio — [goyal-harshit.github.io](https://goyal-harshit.github.io)

Next.js 14 (App Router, static export) · TypeScript · Tailwind CSS · deployed to GitHub Pages via Actions.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
```

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and deploys to GitHub Pages.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

## Structure

- `src/lib/data.ts` — all content (projects, experience, skills). Edit this to update the site.
- `src/app/` — routes: `/`, `/projects`, `/projects/[slug]`, `/vlsi`, `/about`
- `public/resume/` — resume PDFs
