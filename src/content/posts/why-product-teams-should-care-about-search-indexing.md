---
title: "Why Product Teams Should Care About Search Indexing"
created-on: "2021-11-08T06:15:00Z"
updated-on: "2022-01-05T06:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

Most teams only notice search indexing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
