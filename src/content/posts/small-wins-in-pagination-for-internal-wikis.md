---
title: "Small Wins in Pagination for Internal Wikis"
created-on: "2026-07-08T12:30:00Z"
updated-on: "2026-08-11T12:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

Most teams only notice pagination once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
