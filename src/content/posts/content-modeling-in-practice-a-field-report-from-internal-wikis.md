---
title: "Content Modeling in Practice: A Field Report from Internal Wikis"
created-on: "2025-05-20T15:15:00Z"
updated-on: "2025-05-27T15:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to content modeling three times last year. Here is what survived.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
