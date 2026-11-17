---
title: "Incremental Builds: Lessons from Design Systems"
created-on: "2024-04-25T19:30:00Z"
updated-on: "2024-05-23T19:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/markdown.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with design systems and that consensus falls apart quickly.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
