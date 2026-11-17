---
title: "Rethinking Author Profiles for Agencies"
created-on: "2026-06-06T03:15:00Z"
updated-on: "2026-07-20T03:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about author profiles. It grew, because every answer raised two more questions.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
