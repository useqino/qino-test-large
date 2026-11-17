---
title: "Rethinking Headless CMSes for Podcast Sites"
created-on: "2023-12-31T00:15:00Z"
updated-on: "2024-02-07T00:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
