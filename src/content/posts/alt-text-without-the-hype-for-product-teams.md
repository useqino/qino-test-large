---
title: "Alt Text Without the Hype, for Product Teams"
created-on: "2025-08-13T08:15:00Z"
updated-on: "2025-10-01T08:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

Most teams only notice alt text once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
