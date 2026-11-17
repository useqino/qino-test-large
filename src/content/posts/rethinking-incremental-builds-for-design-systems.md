---
title: "Rethinking Incremental Builds for Design Systems"
created-on: "2022-04-27T15:30:00Z"
updated-on: "2022-05-20T15:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/seo.json"
---

incremental builds sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
