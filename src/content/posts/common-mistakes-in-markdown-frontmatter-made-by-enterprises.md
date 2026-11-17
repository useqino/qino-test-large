---
title: "Common Mistakes in Markdown Frontmatter Made by Enterprises"
created-on: "2022-01-27T20:30:00Z"
updated-on: "2022-02-07T20:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

We rebuilt our approach to markdown frontmatter three times last year. Here is what survived.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
