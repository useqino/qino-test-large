---
title: "Debugging Search Indexing as News Publishers"
created-on: "2026-06-15T12:45:00Z"
updated-on: "2026-08-11T12:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about search indexing. It grew, because every answer raised two more questions.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
