---
title: "A Second Look at Content Migrations for Content Editors"
created-on: "2022-03-18T02:45:00Z"
updated-on: "2022-04-17T02:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

There is a quiet consensus that content migrations is solved. Spend a week with content editors and that consensus falls apart quickly.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
