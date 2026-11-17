---
title: "Draft Handling at Scale: Advice for Solo Developers"
created-on: "2024-12-27T18:45:00Z"
updated-on: "2025-01-27T18:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with solo developers and that consensus falls apart quickly.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
