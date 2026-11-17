---
title: "Reading Time Without the Hype, for Solo Developers"
created-on: "2025-07-08T04:45:00Z"
updated-on: "2025-08-22T04:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about reading time. It grew, because every answer raised two more questions.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
