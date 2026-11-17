---
title: "Build Caching Without the Hype, for Technical Writers"
created-on: "2026-08-08T17:45:00Z"
updated-on: "2026-09-05T17:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

We rebuilt our approach to build caching three times last year. Here is what survived.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
