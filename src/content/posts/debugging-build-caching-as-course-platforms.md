---
title: "Debugging Build Caching as Course Platforms"
created-on: "2021-09-20T09:45:00Z"
updated-on: "2021-10-22T09:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that build caching is solved. Spend a week with course platforms and that consensus falls apart quickly.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
