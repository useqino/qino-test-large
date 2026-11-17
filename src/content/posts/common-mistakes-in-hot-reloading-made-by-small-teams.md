---
title: "Common Mistakes in Hot Reloading Made by Small Teams"
created-on: "2026-05-06T23:15:00Z"
updated-on: "2026-05-07T23:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

There is a quiet consensus that hot reloading is solved. Spend a week with small teams and that consensus falls apart quickly.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
