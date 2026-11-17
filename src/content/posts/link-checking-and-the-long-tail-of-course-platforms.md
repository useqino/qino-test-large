---
title: "Link Checking and the Long Tail of Course Platforms"
created-on: "2025-08-25T11:15:00Z"
updated-on: "2025-09-29T11:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

If you work with course platforms, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
