---
title: "Build Caching in Practice: A Field Report from Documentation Sites"
created-on: "2021-12-02T09:30:00Z"
updated-on: "2022-01-29T09:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

There is a quiet consensus that build caching is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

If you take one thing away, make it this: decide on purpose, and write the decision down.
