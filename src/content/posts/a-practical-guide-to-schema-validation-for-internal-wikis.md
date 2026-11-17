---
title: "A Practical Guide to Schema Validation for Internal Wikis"
created-on: "2022-06-01T05:00:00Z"
updated-on: "2022-07-19T05:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
