---
title: "A Checklist for Image Pipelines Aimed at Content Editors"
created-on: "2021-12-21T23:30:00Z"
updated-on: "2022-02-05T23:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
