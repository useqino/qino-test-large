---
title: "What Documentation Sites Get Wrong About Editorial Workflows"
created-on: "2023-11-28T18:00:00Z"
updated-on: "2023-12-17T18:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

If you take one thing away, make it this: decide on purpose, and write the decision down.
