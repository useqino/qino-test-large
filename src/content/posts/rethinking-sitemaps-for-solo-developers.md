---
title: "Rethinking Sitemaps for Solo Developers"
created-on: "2023-06-22T10:30:00Z"
updated-on: "2023-08-02T10:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
