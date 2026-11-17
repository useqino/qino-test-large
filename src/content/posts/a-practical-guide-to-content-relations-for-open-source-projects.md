---
title: "A Practical Guide to Content Relations for Open Source Projects"
created-on: "2022-02-28T08:45:00Z"
updated-on: "2022-04-28T08:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

We rebuilt our approach to content relations three times last year. Here is what survived.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
