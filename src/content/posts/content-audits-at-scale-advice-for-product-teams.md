---
title: "Content Audits at Scale: Advice for Product Teams"
created-on: "2024-07-27T05:45:00Z"
updated-on: "2024-08-21T05:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

content audits sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
