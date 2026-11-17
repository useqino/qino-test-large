---
title: "A Second Look at Static Site Builds for Course Platforms"
created-on: "2023-02-28T02:15:00Z"
updated-on: "2023-04-06T02:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
