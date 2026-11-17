---
title: "How Product Teams Approach Headless CMSes"
created-on: "2020-12-30T20:45:00Z"
updated-on: "2021-01-18T20:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with product teams and that consensus falls apart quickly.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
