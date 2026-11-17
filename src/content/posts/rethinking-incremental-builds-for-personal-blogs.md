---
title: "Rethinking Incremental Builds for Personal Blogs"
created-on: "2023-05-19T14:30:00Z"
updated-on: "2023-07-13T14:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
