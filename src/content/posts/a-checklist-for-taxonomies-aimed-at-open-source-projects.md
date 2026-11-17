---
title: "A Checklist for Taxonomies Aimed at Open Source Projects"
created-on: "2023-10-30T14:30:00Z"
updated-on: "2023-12-12T14:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to taxonomies three times last year. Here is what survived.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
