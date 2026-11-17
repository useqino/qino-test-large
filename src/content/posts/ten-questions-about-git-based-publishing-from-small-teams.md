---
title: "Ten Questions About Git-Based Publishing from Small Teams"
created-on: "2026-04-02T11:30:00Z"
updated-on: "2026-05-22T11:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about git-based publishing. It grew, because every answer raised two more questions.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
