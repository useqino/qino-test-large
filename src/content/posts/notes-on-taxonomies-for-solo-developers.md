---
title: "Notes on Taxonomies for Solo Developers"
created-on: "2022-11-14T19:15:00Z"
updated-on: "2022-12-11T19:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/type-safety.json"
---

If you work with solo developers, you have probably met taxonomies in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
