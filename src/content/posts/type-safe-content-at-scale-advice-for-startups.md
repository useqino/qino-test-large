---
title: "Type-Safe Content at Scale: Advice for Startups"
created-on: "2021-07-16T16:45:00Z"
updated-on: "2021-08-31T16:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

If you work with startups, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
