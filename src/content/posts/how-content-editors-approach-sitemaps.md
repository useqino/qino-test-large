---
title: "How Content Editors Approach Sitemaps"
created-on: "2023-05-30T01:15:00Z"
updated-on: "2023-06-28T01:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/editorial.json"
---

sitemaps sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
