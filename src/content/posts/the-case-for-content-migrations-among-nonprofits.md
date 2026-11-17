---
title: "The Case for Content Migrations Among Nonprofits"
created-on: "2023-12-23T19:15:00Z"
updated-on: "2024-02-09T19:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

If you work with nonprofits, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
