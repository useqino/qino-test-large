---
title: "Folder Structure Without the Hype, for Personal Blogs"
created-on: "2022-11-20T17:15:00Z"
updated-on: "2022-12-02T17:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
