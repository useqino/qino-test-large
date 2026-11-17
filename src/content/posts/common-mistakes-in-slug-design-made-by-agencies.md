---
title: "Common Mistakes in Slug Design Made by Agencies"
created-on: "2021-10-14T06:30:00Z"
updated-on: "2021-11-12T06:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

Most teams only notice slug design once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
