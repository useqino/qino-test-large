---
title: "Draft Handling in Practice: A Field Report from Internal Wikis"
created-on: "2025-06-15T20:30:00Z"
updated-on: "2025-07-20T20:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

If you work with internal wikis, you have probably met draft handling in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
