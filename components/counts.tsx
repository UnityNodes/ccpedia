import { getCounts } from '@/lib/counts';

/**
 * Inline live-count components for MDX prose.
 *
 * Write `<ToolCount /> tools` instead of `87 tools` and the figure stays
 * correct on its own. These are async server components, so they run at
 * render time on the server and ship no client JavaScript. The underlying
 * fetch is ISR-cached (see lib/counts.ts), so a page with several of them
 * still makes at most one upstream request per revalidation window.
 */

export async function ToolCount() {
  const { tools } = await getCounts();
  return <>{tools}</>;
}

export async function SourceCount() {
  const { sources } = await getCounts();
  return <>{sources}</>;
}

export async function EndpointCount() {
  const { endpoints } = await getCounts();
  return <>{endpoints}</>;
}

export async function PatternCount() {
  const { patterns } = await getCounts();
  return <>{patterns}</>;
}

export async function RecordCount() {
  const { records } = await getCounts();
  return <>{records.toLocaleString('en-US')}</>;
}
