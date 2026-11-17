---
title: "What Product Teams Get Wrong About Build Caching"
created-on: "2020-12-21T06:15:00Z"
updated-on: "2020-12-25T06:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about build caching. It grew, because every answer raised two more questions.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
