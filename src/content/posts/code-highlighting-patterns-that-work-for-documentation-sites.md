---
title: "Code Highlighting Patterns That Work for Documentation Sites"
created-on: "2025-12-16T12:00:00Z"
updated-on: "2026-01-13T12:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
