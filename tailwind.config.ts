import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#12121a',
        border: '#23232f',
        muted: '#8b8b98',
        fg: '#e4e4e7',
        accent: '#3b82f6',
        'accent-dim': '#1d4ed8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
