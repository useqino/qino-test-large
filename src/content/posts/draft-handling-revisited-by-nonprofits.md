---
title: "Draft Handling, Revisited by Nonprofits"
created-on: "2024-01-20T03:45:00Z"
updated-on: "2024-02-14T03:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
