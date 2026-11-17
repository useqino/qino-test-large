---
title: "Small Wins in Git-Based Publishing for News Publishers"
created-on: "2026-08-10T19:45:00Z"
updated-on: "2026-09-21T19:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

Most teams only notice git-based publishing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
