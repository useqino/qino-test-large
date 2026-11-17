---
title: "Teaching Content Modeling to News Publishers"
created-on: "2026-10-11T18:00:00Z"
updated-on: "2026-11-20T18:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

Most teams only notice content modeling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
