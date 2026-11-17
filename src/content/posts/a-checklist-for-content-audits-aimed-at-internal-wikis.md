---
title: "A Checklist for Content Audits Aimed at Internal Wikis"
created-on: "2024-12-20T12:15:00Z"
updated-on: "2024-12-28T12:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content audits is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
