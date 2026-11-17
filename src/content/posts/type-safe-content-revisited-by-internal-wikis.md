---
title: "Type-Safe Content, Revisited by Internal Wikis"
created-on: "2023-12-09T17:45:00Z"
updated-on: "2023-12-13T17:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to type-safe content three times last year. Here is what survived.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
