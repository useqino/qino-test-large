---
title: "MDX Components and the Long Tail of E-commerce Catalogs"
created-on: "2021-01-28T13:15:00Z"
updated-on: "2021-02-04T13:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

Most teams only notice mdx components once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
