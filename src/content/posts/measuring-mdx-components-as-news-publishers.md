---
title: "Measuring MDX Components as News Publishers"
created-on: "2026-07-13T19:30:00Z"
updated-on: "2026-08-11T19:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

Most teams only notice mdx components once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
