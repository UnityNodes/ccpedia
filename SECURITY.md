# Security

## What CCPEDIA is and is not

CCPEDIA serves a public, read only view of the Canton ecosystem. It does not accept writes from users, does not require authentication, and does not process any personal information beyond what the source systems already publish.

- No API key required for the MCP endpoint or the REST API.
- No user accounts, no sessions, no logins.
- No writes. Every tool is a read query.
- Every source we index is already public (forum threads, GitHub, docs, mailing lists, videos, on chain data).
- We index the same content that any human visitor can already reach. Content authors can request removal through the source system.

## Threat model in plain terms

The realistic risks with a service like this are:

1. **A synthesised answer misrepresents a source.** We publish citations with every claim so a reader can verify. If an answer misstates a source, report it as an issue and we correct the tool or the pattern that produced it.
2. **A synced snapshot is stale relative to upstream.** Every source has a documented cadence at [docs.ccpedia.xyz/operations/data-sources](https://docs.ccpedia.xyz/operations/data-sources). Time sensitive answers should be cross checked against the upstream URL.
3. **Prompt injection through indexed content.** Public forum posts can contain instructions targeting agents. Clients that connect through MCP should treat CCPEDIA's tool responses as data, not as instructions.

We do not carry a threat model for user data because we do not hold user data.

## Reporting a security issue

Please open a private security advisory on GitHub for anything sensitive, or email the address published on [ccpedia.xyz](https://ccpedia.xyz). For non sensitive issues (wrong answer, stale source, missing citation) open a regular issue with the tool name, your prompt, and what came back.

We aim to acknowledge advisories within two working days.

## Dependency and infrastructure hygiene

- Dependencies are pinned via `package-lock.json` and reviewed on renovate cadence.
- The docs site is a static Fumadocs build, served over HTTPS behind Caddy.
- The MCP endpoint and REST API run under systemd on a hardened VPS. Full deploy configuration is in the service repository.
