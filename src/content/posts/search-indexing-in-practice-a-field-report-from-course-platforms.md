---
title: "Search Indexing in Practice: A Field Report from Course Platforms"
created-on: "2025-06-28T05:00:00Z"
updated-on: "2025-07-06T05:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with course platforms and that consensus falls apart quickly.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
