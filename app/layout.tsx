import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

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

export const metadata = {
  metadataBase: new URL('https://docs.ccpedia.xyz'),
  title: {
    default: 'CCPEDIA docs',
    template: '%s | CCPEDIA docs',
  },
  description:
    'Canton Network knowledge platform. 78 MCP tools, 25 live data sources, 20 design patterns.',
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
    description:
      '78 MCP tools, 25 live Canton data sources. One endpoint at ccpedia.xyz/mcp.',
    url: 'https://docs.ccpedia.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCPEDIA docs',
    description:
      '78 MCP tools, 25 live Canton data sources. One endpoint at ccpedia.xyz/mcp.',
    site: '@UnityNodes',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

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
