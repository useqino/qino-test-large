---
title: "Getting Started with Editorial Workflows for Podcast Sites"
created-on: "2021-08-08T16:00:00Z"
updated-on: "2021-08-30T16:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about editorial workflows. It grew, because every answer raised two more questions.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
