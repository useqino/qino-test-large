---
title: "A Checklist for Static Site Builds Aimed at Large Archives"
created-on: "2024-09-25T01:00:00Z"
updated-on: "2024-09-29T01:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

If you work with large archives, you have probably met static site builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
