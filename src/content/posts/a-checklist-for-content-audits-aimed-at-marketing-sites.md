---
title: "A Checklist for Content Audits Aimed at Marketing Sites"
created-on: "2026-01-30T00:15:00Z"
updated-on: "2026-02-14T00:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about content audits. It grew, because every answer raised two more questions.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
