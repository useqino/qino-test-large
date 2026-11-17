---
title: "What Technical Writers Get Wrong About Headless CMSes"
created-on: "2021-11-08T04:15:00Z"
updated-on: "2021-11-14T04:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with technical writers and that consensus falls apart quickly.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
