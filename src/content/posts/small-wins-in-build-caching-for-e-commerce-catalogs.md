---
title: "Small Wins in Build Caching for E-commerce Catalogs"
created-on: "2020-11-04T23:15:00Z"
updated-on: "2020-12-13T23:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/hanna-voss.json"
category: "categories/seo.json"
---

There is a quiet consensus that build caching is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
