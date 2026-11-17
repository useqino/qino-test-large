---
title: "Measuring Alt Text as Marketing Sites"
created-on: "2025-12-11T16:15:00Z"
updated-on: "2026-01-20T16:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about alt text. It grew, because every answer raised two more questions.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
