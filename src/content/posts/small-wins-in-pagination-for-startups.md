---
title: "Small Wins in Pagination for Startups"
created-on: "2022-07-17T13:45:00Z"
updated-on: "2022-08-24T13:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

There is a quiet consensus that pagination is solved. Spend a week with startups and that consensus falls apart quickly.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
