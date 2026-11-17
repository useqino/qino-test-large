---
title: "Rethinking Search Indexing for Small Teams"
created-on: "2021-12-13T23:30:00Z"
updated-on: "2021-12-21T23:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

search indexing sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
