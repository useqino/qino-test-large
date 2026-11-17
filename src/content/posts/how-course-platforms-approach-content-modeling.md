---
title: "How Course Platforms Approach Content Modeling"
created-on: "2022-06-13T23:30:00Z"
updated-on: "2022-06-16T23:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

We rebuilt our approach to content modeling three times last year. Here is what survived.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
