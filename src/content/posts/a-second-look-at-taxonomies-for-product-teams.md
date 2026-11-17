---
title: "A Second Look at Taxonomies for Product Teams"
created-on: "2021-05-13T17:45:00Z"
updated-on: "2021-06-18T17:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that taxonomies is solved. Spend a week with product teams and that consensus falls apart quickly.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
