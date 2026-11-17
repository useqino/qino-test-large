---
title: "A Checklist for Type-Safe Content Aimed at Agencies"
created-on: "2025-02-06T09:45:00Z"
updated-on: "2025-03-26T09:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
