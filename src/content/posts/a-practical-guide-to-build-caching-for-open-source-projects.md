---
title: "A Practical Guide to Build Caching for Open Source Projects"
created-on: "2025-11-26T13:15:00Z"
updated-on: "2025-12-28T13:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

Most teams only notice build caching once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
