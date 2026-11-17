---
title: "Notes on Media Management for Course Platforms"
created-on: "2022-02-07T21:45:00Z"
updated-on: "2022-02-16T21:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about media management. It grew, because every answer raised two more questions.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
