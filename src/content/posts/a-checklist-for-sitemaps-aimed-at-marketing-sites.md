---
title: "A Checklist for Sitemaps Aimed at Marketing Sites"
created-on: "2026-01-16T23:15:00Z"
updated-on: "2026-01-22T23:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

We rebuilt our approach to sitemaps three times last year. Here is what survived.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
