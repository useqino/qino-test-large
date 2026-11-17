---
title: "Debugging Pull Request Reviews as Design Systems"
created-on: "2024-04-27T07:15:00Z"
updated-on: "2024-05-21T07:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

If you work with design systems, you have probably met pull request reviews in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
