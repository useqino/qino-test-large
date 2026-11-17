---
title: "Type-Safe Content, Revisited by E-commerce Catalogs"
created-on: "2020-12-31T02:30:00Z"
updated-on: "2021-02-10T02:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/markdown.json"
---

We rebuilt our approach to type-safe content three times last year. Here is what survived.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
