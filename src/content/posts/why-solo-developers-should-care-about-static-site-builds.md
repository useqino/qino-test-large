---
title: "Why Solo Developers Should Care About Static Site Builds"
created-on: "2025-06-16T18:45:00Z"
updated-on: "2025-08-12T18:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with solo developers and that consensus falls apart quickly.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
