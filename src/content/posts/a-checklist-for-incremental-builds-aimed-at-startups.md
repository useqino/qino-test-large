---
title: "A Checklist for Incremental Builds Aimed at Startups"
created-on: "2021-09-30T00:45:00Z"
updated-on: "2021-11-08T00:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
