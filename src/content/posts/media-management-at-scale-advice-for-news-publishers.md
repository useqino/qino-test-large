---
title: "Media Management at Scale: Advice for News Publishers"
created-on: "2021-01-31T14:00:00Z"
updated-on: "2021-02-21T14:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

If you work with news publishers, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
