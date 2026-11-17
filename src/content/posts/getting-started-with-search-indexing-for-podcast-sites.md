---
title: "Getting Started with Search Indexing for Podcast Sites"
created-on: "2021-03-03T20:45:00Z"
updated-on: "2021-04-19T20:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

We rebuilt our approach to search indexing three times last year. Here is what survived.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
