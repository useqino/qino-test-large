---
title: "How Open Source Projects Approach Hot Reloading"
created-on: "2024-12-08T01:30:00Z"
updated-on: "2025-01-10T01:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/camille-laurent.json"
category: "categories/performance.json"
---

hot reloading sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
