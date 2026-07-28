# Showcase

Real examples of what CCPEDIA does that a general-purpose model with web search cannot.

## Faster than human responders on the Canton forum

**Thread:** [How to get the utility registry DARs for an AMM LP token build on localnet](https://forum.canton.network/t/how-to-get-the-utility-registry-dars-for-an-amm-lp-token-build-on-localnet/8798) (forum.canton.network, thread 8798).

**Timeline.** The question was posted on 2026-06-18 at 11:27 UTC. CCPEDIA's forum sync picked it up within roughly six hours. It sat unanswered for more than 24 hours while the Canton Foundation's own MCP was in maintenance.

**What CCPEDIA had on hand.** Because the corpus already included the utility registry DAR release notes, the localnet setup guide, the AMM LP token pattern from the token standard docs, and adjacent forum threads on the same topic, an agent connected to `ccpedia.xyz/mcp` could produce a fully cited draft answer immediately after ingestion. Every claim linked back to a specific CIP section, docs page, or prior thread.

**Why this matters.** The 5-minute sync cadence for the forum, combined with the MCP tool set, means the corpus can architecturally answer new threads faster than human responders typically do. This is not a claim about answer quality relative to a Canton core engineer. It is a claim about coverage and latency during the hours when experts are offline.

## Cross-source synthesis that stitches CIPs to forum context

**Prompt used in Claude Desktop connected to ccpedia.xyz/mcp:**

> Explain the current state of Splice validator rewards. Cite the source for every number.

**What the agent did.** Called `search` with `splice validator rewards`, then `get_cip` for the specific proposals returned, then `get_discussion` on two forum threads that were referenced from the CIPs. It stitched together the current reward formula from the CIP, the transition schedule from a governance thread, and the most recent operational note from an SV announcement.

**Why this is different from web search.** A general model with search will find each of these pages independently but does not know which forum thread is authoritative on the operational side, or which CIP supersedes which. CCPEDIA's tool set exposes the dependency graph, so the agent walks it.

## Case: onboarding drift detection

**Tool used:** `detect_drift`.

**What it does.** Compares the "get started" flow documented on docs.canton.network against the actual command sequence used in cn-quickstart and in the last week of forum help threads. Flags steps that have changed upstream but not yet been reflected in docs.

**Recent hit.** In one run the tool flagged that a specific `daml codegen` flag had been renamed upstream while the onboarding doc still referenced the old flag. That is the exact kind of small drift that costs a newcomer thirty minutes and is nearly invisible to a human maintainer reading their own docs.

## Try it yourself

Connect any MCP client to `https://ccpedia.xyz/mcp` (see [README](README.md) for a 60-second setup) and try any of these prompts:

- "What is the current status of CIP-0056 and who has voted on it?"
- "Show me the last 5 forum threads about wallet kernel and summarise the open questions."
- "Which SDKs are on the latest release and what did they add?"
- "Diagnose this Canton error: <paste log line>."
- "Give me the localnet DAR setup that matches the current utility registry release."
