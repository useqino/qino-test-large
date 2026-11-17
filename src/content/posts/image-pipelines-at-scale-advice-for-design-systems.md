---
title: "Image Pipelines at Scale: Advice for Design Systems"
created-on: "2021-10-16T10:15:00Z"
updated-on: "2021-11-16T10:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

We rebuilt our approach to image pipelines three times last year. Here is what survived.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
