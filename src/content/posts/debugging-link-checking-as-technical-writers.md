---
title: "Debugging Link Checking as Technical Writers"
created-on: "2025-12-22T13:15:00Z"
updated-on: "2026-01-01T13:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/tooling.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Keep one schema per collection and version it with the content.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
