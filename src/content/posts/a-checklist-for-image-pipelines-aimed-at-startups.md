---
title: "A Checklist for Image Pipelines Aimed at Startups"
created-on: "2020-11-11T19:15:00Z"
updated-on: "2020-12-30T19:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about image pipelines. It grew, because every answer raised two more questions.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
