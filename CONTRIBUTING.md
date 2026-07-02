# Contributing

Thanks for helping. There are four ways to contribute, ordered by how quickly you can land the change.

## 1. Fix a typo or sharpen a page

The docs live under `content/docs/` in this repo. Edit the `.mdx` file, push, open a PR. The Fumadocs site rebuilds on merge and the change is live at `docs.ccpedia.xyz` within a minute.

Style notes:

- Short sentences. Plain human prose.
- Cite the source when you state a fact about the ecosystem. Prefer the primary source (a specific CIP, a docs page, a forum thread) over a paraphrase.
- Do not use em dashes.
- Use fenced code blocks with the language tag. Prefer `json`, `bash`, `ts`.

## 2. Report a wrong or stale answer

If you asked CCPEDIA something through an MCP client or the REST API and the answer was wrong or out of date, open an issue with:

- The tool name (for MCP) or endpoint (for REST).
- The prompt or query you used.
- What came back.
- What the correct answer should have been, with a source.

We treat these as first class bug reports.

## 3. Propose a new data source

If there is a Canton surface we do not sync yet and should, open an issue with:

- The source URL.
- The type (docs site, forum, mailing list, GitHub org, calendar, on chain feed, etc.).
- Why the ecosystem needs it indexed. One example question that would be answerable if we had it.

Small, focused proposals land faster than "index everything from vendor X".

## 4. Contribute code

The docs site source is in this repo (Fumadocs 16, Next.js 16, Tailwind 4). Standard PR flow.

The MCP server, sync scripts, database schema, and REST API run in the CCPEDIA service repository. Auto-generated pages under `content/docs/tools/` and `content/docs/patterns/` come from there, so edits to those files locally will be overwritten on the next sync. If you want to change a tool description or add a pattern, tell us in an issue and we will land it upstream.

## Pull request checklist

- [ ] The change is scoped. One typo fix, one page rewrite, or one new pattern per PR.
- [ ] Facts in the docs are backed by a link to a primary source.
- [ ] No em dashes.
- [ ] Local build passes: `npm install && npm run types:check && npm run build`.
- [ ] Screenshots for any visual change to a docs page.

## Code of conduct

Be constructive. Assume good faith. Cite instead of accuse. If you spot a factual error, propose the correction rather than the complaint.
