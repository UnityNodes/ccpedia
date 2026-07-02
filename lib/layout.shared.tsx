import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2.5">
          <Image
            src="/logo-light.png"
            alt="CCPEDIA"
            width={26}
            height={26}
            priority
            className="brand-logo brand-logo-light"
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="/logo-dark.png"
            alt="CCPEDIA"
            width={26}
            height={26}
            priority
            className="brand-logo brand-logo-dark"
            style={{ objectFit: 'contain' }}
          />
          <span className="flex flex-col leading-tight">
            <span
              style={{
                fontFamily: 'var(--font-mono), JetBrains Mono, monospace',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.12em',
              }}
            >
              CCPEDIA
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono), JetBrains Mono, monospace',
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                opacity: 0.55,
                marginTop: 1,
              }}
            >
              docs
            </span>
          </span>
        </span>
      ),
      url: '/',
    },
    links: [
      { text: 'Live site', url: 'https://ccpedia.xyz', external: true },
      { text: 'GitHub', url: 'https://github.com/UnityNodes/ccpedia', external: true },
    ],
    githubUrl: 'https://github.com/UnityNodes/ccpedia',
  };
}
