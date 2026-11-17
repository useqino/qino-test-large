---
title: "The Case for Rich Text Editors Among Internal Wikis"
created-on: "2023-03-10T03:45:00Z"
updated-on: "2023-05-06T03:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

rich text editors sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
