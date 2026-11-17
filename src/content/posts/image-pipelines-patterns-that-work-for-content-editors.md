---
title: "Image Pipelines Patterns That Work for Content Editors"
created-on: "2023-03-20T07:15:00Z"
updated-on: "2023-04-18T07:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

Most teams only notice image pipelines once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
