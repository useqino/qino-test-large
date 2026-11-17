---
title: "Debugging Draft Handling as Course Platforms"
created-on: "2022-05-05T08:00:00Z"
updated-on: "2022-05-22T08:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

Most teams only notice draft handling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
