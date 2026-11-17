---
title: "Draft Handling for Nonprofits"
created-on: "2024-06-02T17:00:00Z"
updated-on: "2024-07-20T17:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

Most teams only notice draft handling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
