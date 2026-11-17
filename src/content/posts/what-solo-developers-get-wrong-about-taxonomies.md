---
title: "What Solo Developers Get Wrong About Taxonomies"
created-on: "2023-10-23T20:00:00Z"
updated-on: "2023-12-02T20:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

We rebuilt our approach to taxonomies three times last year. Here is what survived.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
