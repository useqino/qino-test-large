---
title: "Rethinking Schema Validation for Documentation Sites"
created-on: "2021-08-04T16:15:00Z"
updated-on: "2021-09-29T16:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

There is a quiet consensus that schema validation is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
