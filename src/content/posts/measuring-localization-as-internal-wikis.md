---
title: "Measuring Localization as Internal Wikis"
created-on: "2025-10-16T04:45:00Z"
updated-on: "2025-12-07T04:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

localization sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
