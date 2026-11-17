---
title: "Localization and the Long Tail of Large Archives"
created-on: "2023-02-26T17:00:00Z"
updated-on: "2023-04-12T17:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/markdown.json"
---

Most teams only notice localization once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
