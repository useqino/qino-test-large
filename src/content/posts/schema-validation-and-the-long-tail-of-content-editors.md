---
title: "Schema Validation and the Long Tail of Content Editors"
created-on: "2022-11-16T19:15:00Z"
updated-on: "2022-12-25T19:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about schema validation. It grew, because every answer raised two more questions.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
