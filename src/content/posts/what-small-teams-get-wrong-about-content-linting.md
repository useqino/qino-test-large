---
title: "What Small Teams Get Wrong About Content Linting"
created-on: "2021-12-04T01:45:00Z"
updated-on: "2022-01-07T01:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
