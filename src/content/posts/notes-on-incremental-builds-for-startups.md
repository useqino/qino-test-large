---
title: "Notes on Incremental Builds for Startups"
created-on: "2025-01-26T08:45:00Z"
updated-on: "2025-02-15T08:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to incremental builds three times last year. Here is what survived.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
