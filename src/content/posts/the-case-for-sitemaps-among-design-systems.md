---
title: "The Case for Sitemaps Among Design Systems"
created-on: "2021-01-20T23:45:00Z"
updated-on: "2021-02-01T23:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

Most teams only notice sitemaps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
