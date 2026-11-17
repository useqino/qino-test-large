---
title: "Content Audits for Design Systems"
created-on: "2026-08-07T12:00:00Z"
updated-on: "2026-10-01T12:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

There is a quiet consensus that content audits is solved. Spend a week with design systems and that consensus falls apart quickly.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
