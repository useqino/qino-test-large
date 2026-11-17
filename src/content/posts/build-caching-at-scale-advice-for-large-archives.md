---
title: "Build Caching at Scale: Advice for Large Archives"
created-on: "2026-10-22T03:45:00Z"
updated-on: "2026-12-19T03:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

We rebuilt our approach to build caching three times last year. Here is what survived.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
