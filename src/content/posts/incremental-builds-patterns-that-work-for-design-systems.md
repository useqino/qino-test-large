---
title: "Incremental Builds Patterns That Work for Design Systems"
created-on: "2024-09-17T01:30:00Z"
updated-on: "2024-11-07T01:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

If you work with design systems, you have probably met incremental builds in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
