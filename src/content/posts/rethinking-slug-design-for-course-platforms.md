---
title: "Rethinking Slug Design for Course Platforms"
created-on: "2021-07-14T00:00:00Z"
updated-on: "2021-09-07T00:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about slug design. It grew, because every answer raised two more questions.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
