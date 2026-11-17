---
title: "RSS Feeds Without the Hype, for Large Archives"
created-on: "2022-04-13T14:30:00Z"
updated-on: "2022-04-21T14:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

If you take one thing away, make it this: decide on purpose, and write the decision down.
