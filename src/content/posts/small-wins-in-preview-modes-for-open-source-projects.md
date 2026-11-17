---
title: "Small Wins in Preview Modes for Open Source Projects"
created-on: "2021-11-02T20:30:00Z"
updated-on: "2021-12-04T20:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/performance.json"
---

Most teams only notice preview modes once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
