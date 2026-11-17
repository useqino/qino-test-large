---
title: "Sitemaps in Practice: A Field Report from Course Platforms"
created-on: "2026-04-29T12:00:00Z"
updated-on: "2026-06-22T12:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/migration.json"
---

Most teams only notice sitemaps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
