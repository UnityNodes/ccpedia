import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getCounts } from '@/lib/counts';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});

// Async so the counts in the descriptions come from the live API instead of
// being retyped here. These strings are what search engines and social cards
// show, and they had gone stale at "78 MCP tools, 25 live data sources" while
// the real figures were 87 and 15.
export async function generateMetadata(): Promise<Metadata> {
  const { tools, sources, patterns } = await getCounts();

  const summary = `${tools} MCP tools, ${sources} live Canton data sources. One endpoint at ccpedia.xyz/mcp.`;

  return {
    metadataBase: new URL('https://docs.ccpedia.xyz'),
    alternates: { canonical: '/' },
    title: {
      default: 'CCPEDIA docs',
      template: '%s | CCPEDIA docs',
    },
    description: `Canton Network knowledge platform. ${tools} MCP tools, ${sources} live data sources, ${patterns} design patterns.`,
    applicationName: 'CCPEDIA docs',
    authors: [{ name: 'Unity Nodes', url: 'https://unitynodes.com' }],
    keywords: [
      'Canton Network',
      'Canton Improvement Proposals',
      'CIPs',
      'MCP',
      'Model Context Protocol',
      'Daml',
      'Splice',
      'Super Validator',
    ],
    openGraph: {
      type: 'website',
      siteName: 'CCPEDIA docs',
      title: 'CCPEDIA docs',
      description: summary,
      url: 'https://docs.ccpedia.xyz',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CCPEDIA docs',
      description: summary,
      site: '@UnityNodes',
    },
    icons: {
      icon: '/icon.png',
      apple: '/apple-icon.png',
    },
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            enableSystem: true,
            storageKey: 'ccpedia-theme',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
