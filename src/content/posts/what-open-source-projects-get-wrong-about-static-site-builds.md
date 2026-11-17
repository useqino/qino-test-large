---
title: "What Open Source Projects Get Wrong About Static Site Builds"
created-on: "2026-09-18T21:00:00Z"
updated-on: "2026-10-03T21:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about static site builds. It grew, because every answer raised two more questions.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
