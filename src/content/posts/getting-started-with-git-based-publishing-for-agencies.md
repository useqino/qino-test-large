---
title: "Getting Started with Git-Based Publishing for Agencies"
created-on: "2023-09-04T06:30:00Z"
updated-on: "2023-09-09T06:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
