---
title: "A Practical Guide to Sitemaps for Open Source Projects"
created-on: "2025-11-20T19:45:00Z"
updated-on: "2026-01-12T19:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to sitemaps three times last year. Here is what survived.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
