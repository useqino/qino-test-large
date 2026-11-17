---
title: "Debugging Content Modeling as Marketing Sites"
created-on: "2026-10-24T21:15:00Z"
updated-on: "2026-11-07T21:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

If you work with marketing sites, you have probably met content modeling in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
