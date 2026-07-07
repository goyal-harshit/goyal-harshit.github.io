import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { site } from '@/lib/data';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software/AI & VLSI Engineer`,
    template: `%s · ${site.name}`,
  },
  description: `${site.role}. ${site.tagline} Full-stack AI platforms, LLM/RAG pipelines, knowledge graphs, and RTL-to-Pre-CTS synthesis automation.`,
  openGraph: {
    title: `${site.name} — Software/AI & VLSI Engineer`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
