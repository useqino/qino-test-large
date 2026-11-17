---
title: "A Checklist for Content Modeling Aimed at Technical Writers"
created-on: "2022-11-15T09:00:00Z"
updated-on: "2022-11-20T09:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

Most teams only notice content modeling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
