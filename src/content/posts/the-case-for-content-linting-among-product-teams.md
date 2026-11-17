---
title: "The Case for Content Linting Among Product Teams"
created-on: "2025-05-11T15:30:00Z"
updated-on: "2025-05-25T15:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

This post started as a short note to a colleague about content linting. It grew, because every answer raised two more questions.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
