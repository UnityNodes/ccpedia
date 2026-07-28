/**
 * Live platform counts, read from the main site rather than hardcoded here.
 *
 * Every "N tools" / "N sources" / "N endpoints" / "N patterns" figure on this
 * site used to be a literal typed into each file. There were roughly a dozen
 * of them across MDX prose, layout metadata, the OG image and the README, and
 * they drifted apart every single time the real number moved: the tool count
 * was simultaneously 78 in three docs pages, 80 in the README and 87 in
 * reality.
 *
 * ccpedia.xyz/api/v1/sources publishes all four numbers, derived from the
 * actual tool registry, sync list and endpoint array. Fetching them with ISR
 * means the figures self-heal within REVALIDATE_SECONDS with no rebuild and no
 * deploy, which matters because nothing on the host auto-deploys this site.
 *
 * FALLBACK is the last-known-good set, used when the API is unreachable. It is
 * deliberately a plausible recent value rather than a zero: a docs page that
 * says "0 tools" during a blip is worse than one that is briefly a few tools
 * stale. Keep it roughly current, but it is a safety net, not the source.
 */

const SOURCES_URL = 'https://ccpedia.xyz/api/v1/sources';

export const REVALIDATE_SECONDS = 3600;

export interface PlatformCounts {
  tools: number;
  sources: number;
  endpoints: number;
  patterns: number;
  records: number;
  /** False when the fetch failed and FALLBACK was served. */
  live: boolean;
}

const FALLBACK: PlatformCounts = {
  tools: 87,
  sources: 15,
  endpoints: 39,
  patterns: 20,
  records: 18830,
  live: false,
};

interface SourcesResponse {
  mcp_tools_count?: number;
  source_count?: number;
  count?: number;
  rest_endpoint_count?: number;
  pattern_count?: number;
  total_records?: number;
}

/**
 * Read the live counts. Never throws and never returns zeros: any failure
 * falls back to the last-known-good set above so a page render cannot break
 * because the main site is briefly down.
 */
export async function getCounts(): Promise<PlatformCounts> {
  try {
    const res = await fetch(SOURCES_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return FALLBACK;
    const json = (await res.json()) as SourcesResponse;

    // Treat a missing or zero field as "not reported" and fall back per field.
    // A zero here would mean the upstream probe failed, not that the platform
    // genuinely has no tools.
    let anyReported = false;
    const pick = (value: number | undefined, fallback: number): number => {
      if (typeof value === 'number' && value > 0) {
        anyReported = true;
        return value;
      }
      return fallback;
    };

    const counts = {
      tools: pick(json.mcp_tools_count, FALLBACK.tools),
      sources: pick(json.source_count ?? json.count, FALLBACK.sources),
      endpoints: pick(json.rest_endpoint_count, FALLBACK.endpoints),
      patterns: pick(json.pattern_count, FALLBACK.patterns),
      records: pick(json.total_records, FALLBACK.records),
    };

    // A 200 that carried nothing usable is not live data, whatever the status
    // code said. Reporting live:true there would make a fully fallen-back
    // response indistinguishable from a real one.
    return { ...counts, live: anyReported };
  } catch {
    return FALLBACK;
  }
}
