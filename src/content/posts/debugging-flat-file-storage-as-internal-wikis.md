---
title: "Debugging Flat-File Storage as Internal Wikis"
created-on: "2023-12-18T17:45:00Z"
updated-on: "2024-01-21T17:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

Most teams only notice flat-file storage once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
