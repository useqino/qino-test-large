---
title: "The Hidden Cost of Content Migrations for Open Source Projects"
created-on: "2026-08-07T00:15:00Z"
updated-on: "2026-08-31T00:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

If you work with open source projects, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

If you take one thing away, make it this: decide on purpose, and write the decision down.
