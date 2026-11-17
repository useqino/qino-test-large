---
title: "Preview Modes Without the Hype, for E-commerce Catalogs"
created-on: "2026-07-19T02:30:00Z"
updated-on: "2026-08-23T02:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

We rebuilt our approach to preview modes three times last year. Here is what survived.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
