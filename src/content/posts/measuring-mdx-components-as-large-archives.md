---
title: "Measuring MDX Components as Large Archives"
created-on: "2021-04-15T16:15:00Z"
updated-on: "2021-06-02T16:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/editorial.json"
---

Most teams only notice mdx components once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
