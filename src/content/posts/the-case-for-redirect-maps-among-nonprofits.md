---
title: "The Case for Redirect Maps Among Nonprofits"
created-on: "2025-02-04T00:15:00Z"
updated-on: "2025-03-22T00:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to redirect maps three times last year. Here is what survived.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
