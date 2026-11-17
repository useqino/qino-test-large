---
title: "Content Linting and the Long Tail of Technical Writers"
created-on: "2026-04-01T08:00:00Z"
updated-on: "2026-04-12T08:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
