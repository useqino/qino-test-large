---
title: "Content Linting in Practice: A Field Report from Internal Wikis"
created-on: "2025-09-16T00:00:00Z"
updated-on: "2025-09-23T00:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content linting is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
