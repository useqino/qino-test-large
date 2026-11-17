---
title: "Flat-File Storage Without the Hype, for Startups"
created-on: "2022-08-24T02:15:00Z"
updated-on: "2022-10-04T02:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
