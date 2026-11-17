---
title: "Author Profiles at Scale: Advice for Course Platforms"
created-on: "2023-01-07T01:15:00Z"
updated-on: "2023-01-12T01:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

We rebuilt our approach to author profiles three times last year. Here is what survived.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
