---
title: "Editorial Workflows and the Long Tail of Small Teams"
created-on: "2021-05-20T17:15:00Z"
updated-on: "2021-05-26T17:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/tooling.json"
---

There is a quiet consensus that editorial workflows is solved. Spend a week with small teams and that consensus falls apart quickly.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

If you take one thing away, make it this: decide on purpose, and write the decision down.
