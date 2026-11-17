---
title: "Image Pipelines Patterns That Work for News Publishers"
created-on: "2025-04-04T14:30:00Z"
updated-on: "2025-04-16T14:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with news publishers and that consensus falls apart quickly.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
