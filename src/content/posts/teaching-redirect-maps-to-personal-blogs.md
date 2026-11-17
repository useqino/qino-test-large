---
title: "Teaching Redirect Maps to Personal Blogs"
created-on: "2026-03-14T05:45:00Z"
updated-on: "2026-03-31T05:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
