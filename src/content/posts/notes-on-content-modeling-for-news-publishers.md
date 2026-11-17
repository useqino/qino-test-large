---
title: "Notes on Content Modeling for News Publishers"
created-on: "2026-09-29T08:00:00Z"
updated-on: "2026-10-02T08:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

We rebuilt our approach to content modeling three times last year. Here is what survived.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
