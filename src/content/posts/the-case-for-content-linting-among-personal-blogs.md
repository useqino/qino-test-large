---
title: "The Case for Content Linting Among Personal Blogs"
created-on: "2021-04-26T20:00:00Z"
updated-on: "2021-05-02T20:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/performance.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
