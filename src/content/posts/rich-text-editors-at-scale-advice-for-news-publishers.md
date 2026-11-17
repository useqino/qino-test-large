---
title: "Rich Text Editors at Scale: Advice for News Publishers"
created-on: "2023-07-18T02:30:00Z"
updated-on: "2023-07-31T02:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about rich text editors. It grew, because every answer raised two more questions.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
