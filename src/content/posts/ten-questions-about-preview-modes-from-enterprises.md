---
title: "Ten Questions About Preview Modes from Enterprises"
created-on: "2025-02-27T22:30:00Z"
updated-on: "2025-03-08T22:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/content-modeling.json"
---

Most teams only notice preview modes once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
