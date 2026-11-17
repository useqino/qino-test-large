---
title: "Folder Structure, Revisited by Open Source Projects"
created-on: "2024-07-26T16:00:00Z"
updated-on: "2024-08-19T16:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
