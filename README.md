# CCPEDIA

**The Canton Network knowledge platform.** Open source, no auth, one MCP endpoint.

Live at [ccpedia.xyz](https://ccpedia.xyz) · Docs at [docs.ccpedia.xyz](https://docs.ccpedia.xyz) · MCP at [ccpedia.xyz/mcp](https://ccpedia.xyz/mcp)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![MCP](https://img.shields.io/badge/MCP-endpoint-8A2BE2)](https://ccpedia.xyz/mcp)
[![Live sources](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fccpedia.xyz%2Fapi%2Fv1%2Fsources&query=%24.count&label=live%20sources)](https://ccpedia.xyz/api/v1/sources)

CCPEDIA continuously syncs every official Canton surface (forum, GitHub, docs, CIPs, mailing lists, videos, dev fund, ecosystem registry, validator calendar, app metrics) and serves it to AI agents through one MCP endpoint and a REST API. No key, no signup, read only.

## One-click install

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_MCP-0098FF?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=ccpedia&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fccpedia.xyz%2Fmcp%22%7D)
[![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install_MCP-24bfa5?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=ccpedia&quality=insiders&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fccpedia.xyz%2Fmcp%22%7D)
[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=ccpedia&config=eyJ1cmwiOiJodHRwczovL2NjcGVkaWEueHl6L21jcCJ9)

## Connect your AI tool in 60 seconds

**Claude Code**

```bash
claude mcp add --transport http ccpedia https://ccpedia.xyz/mcp
```

**Claude Desktop, Cursor, Windsurf, Zed, or any MCP client.** Drop this into your client's MCP config:

```json
{
  "mcpServers": {
    "ccpedia": {
      "url": "https://ccpedia.xyz/mcp"
    }
  }
}
```

Full per-client guides: [Claude Desktop](https://docs.ccpedia.xyz/integrations/claude-desktop) · [Claude Code](https://docs.ccpedia.xyz/integrations/claude-code) · [Cursor](https://docs.ccpedia.xyz/integrations/cursor) · [Windsurf](https://docs.ccpedia.xyz/integrations/windsurf) · [Zed](https://docs.ccpedia.xyz/integrations/zed) · [Any MCP client](https://docs.ccpedia.xyz/integrations/generic).

Interactive setup wizard: [ccpedia.xyz/for-ai](https://ccpedia.xyz/for-ai).

## What you get

- **78 MCP tools** across 10 categories: search, CIPs, forum, mailing lists, docs, YouTube, ecosystem, validators, dev fund, releases. Full catalog: [docs.ccpedia.xyz/tools/overview](https://docs.ccpedia.xyz/tools/overview).
- **25 live data sources** synced every 5 minutes to 24 hours depending on cadence. Live list: [ccpedia.xyz/api/v1/sources](https://ccpedia.xyz/api/v1/sources).
- **20 Canton design patterns** for the questions we see most (SV operations, DAML fundamentals, token standards, governance, debugging). Index: [docs.ccpedia.xyz/patterns/overview](https://docs.ccpedia.xyz/patterns/overview).
- **REST API** with 39 endpoints and an OpenAPI 3.1 spec: [ccpedia.xyz/api/v1/reference](https://ccpedia.xyz/api/v1/reference).

Ask it "how do I build a token on Canton?" and it returns the actual CIP template code with citations, not a paraphrase.

## What's in this repository

The public documentation site published at [docs.ccpedia.xyz](https://docs.ccpedia.xyz).

```
content/docs/       MDX source for the docs site
  integrations/     Per-client setup guides
  tools/            MCP tool reference, grouped by category
  patterns/         Canton design recipes
  api-reference/    REST endpoint documentation
  operations/       Data sources, sync cadences, live status
app/, components/   Fumadocs 16 site (Next.js 16, React 19, Tailwind 4)
.mcp.json           Copy-paste MCP config that clients auto-detect
llms.txt            AI-agent map of this repository
SHOWCASE.md         Real examples of CCPEDIA answering faster than humans
```

## Contribute

- **Fix a typo, sharpen a page, add an example.** Edit any `.mdx` under `content/docs/` and open a PR. The site rebuilds on merge.
- **Wrong or outdated answer.** Open an issue with the tool name, your prompt, and what CCPEDIA returned.
- **Propose a new data source** — open an issue with the source URL and why the ecosystem needs it indexed.

Details: [CONTRIBUTING.md](CONTRIBUTING.md).

Auto-generated pages under `content/docs/tools/` and `content/docs/patterns/` are synced from the main service and get overwritten on the next sync. Edit the source in the CCPEDIA service repo instead.

## Security

Read only, no auth, no PII, no writes. See [SECURITY.md](SECURITY.md) for the threat model and how to report an issue.

## License

Apache 2.0. See [LICENSE](LICENSE).
