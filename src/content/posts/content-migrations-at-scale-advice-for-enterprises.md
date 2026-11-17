---
title: "Content Migrations at Scale: Advice for Enterprises"
created-on: "2023-05-28T05:15:00Z"
updated-on: "2023-06-30T05:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

If you work with enterprises, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
