---
title: "Debugging Incremental Builds as Content Editors"
created-on: "2023-09-25T06:45:00Z"
updated-on: "2023-11-23T06:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that incremental builds is solved. Spend a week with content editors and that consensus falls apart quickly.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
