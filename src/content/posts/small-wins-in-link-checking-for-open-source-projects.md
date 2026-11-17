---
title: "Small Wins in Link Checking for Open Source Projects"
created-on: "2024-11-21T03:30:00Z"
updated-on: "2024-12-31T03:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

Most teams only notice link checking once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
