---
title: "Common Mistakes in Content Migrations Made by Enterprises"
created-on: "2022-01-21T06:30:00Z"
updated-on: "2022-03-11T06:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

Most teams only notice content migrations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
