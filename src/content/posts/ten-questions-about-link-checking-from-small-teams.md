---
title: "Ten Questions About Link Checking from Small Teams"
created-on: "2021-10-11T05:00:00Z"
updated-on: "2021-11-22T05:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
