---
title: "Ten Questions About Content Modeling from Large Archives"
created-on: "2022-10-16T14:00:00Z"
updated-on: "2022-10-16T14:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/philosophy.json"
---

content modeling sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
