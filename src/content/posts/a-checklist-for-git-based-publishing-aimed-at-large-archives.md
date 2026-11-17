---
title: "A Checklist for Git-Based Publishing Aimed at Large Archives"
created-on: "2024-12-11T16:45:00Z"
updated-on: "2024-12-26T16:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
