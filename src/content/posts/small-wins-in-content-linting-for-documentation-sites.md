---
title: "Small Wins in Content Linting for Documentation Sites"
created-on: "2022-01-01T12:00:00Z"
updated-on: "2022-02-04T12:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

There is a quiet consensus that content linting is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
