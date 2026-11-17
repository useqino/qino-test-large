---
title: "Draft Handling Patterns That Work for Small Teams"
created-on: "2022-02-10T03:15:00Z"
updated-on: "2022-03-21T03:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/performance.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with small teams and that consensus falls apart quickly.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Store media next to the content that uses it, or in one well-named folder.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

If you take one thing away, make it this: decide on purpose, and write the decision down.
