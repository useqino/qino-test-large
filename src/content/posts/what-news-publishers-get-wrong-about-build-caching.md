---
title: "What News Publishers Get Wrong About Build Caching"
created-on: "2025-06-03T22:00:00Z"
updated-on: "2025-06-14T22:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about build caching. It grew, because every answer raised two more questions.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
