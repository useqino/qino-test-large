---
title: "Static Site Builds for News Publishers"
created-on: "2026-07-09T09:00:00Z"
updated-on: "2026-08-15T09:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/architecture.json"
---

We rebuilt our approach to static site builds three times last year. Here is what survived.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
