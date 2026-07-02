import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CCPEDIA docs — 78 MCP tools for Canton Network';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#030206',
          color: '#fffffc',
          padding: '80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(243,255,151,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(243,255,151,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 20,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#9692a0',
          }}
        >
          <span
            style={{
              display: 'flex',
              width: 18,
              height: 18,
              background: '#f3ff97',
            }}
          />
          docs.ccpedia.xyz
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              display: 'flex',
            }}
          >
            CCPEDIA
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 400,
              color: '#c8c5d0',
              maxWidth: 900,
              lineHeight: 1.25,
              display: 'flex',
            }}
          >
            Canton Network knowledge platform. 78 MCP tools, 25 live data
            sources, one endpoint at ccpedia.xyz/mcp.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 18,
            color: '#9692a0',
            letterSpacing: '0.08em',
          }}
        >
          <div style={{ display: 'flex', gap: 32 }}>
            <span>78 MCP TOOLS</span>
            <span>25 SOURCES</span>
            <span>20 PATTERNS</span>
          </div>
          <div style={{ color: '#f3ff97' }}>OPEN SOURCE · APACHE 2.0</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
