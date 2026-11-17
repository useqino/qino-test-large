---
title: "MDX Components Without the Hype, for Startups"
created-on: "2023-07-11T02:00:00Z"
updated-on: "2023-08-16T02:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

Most teams only notice mdx components once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
