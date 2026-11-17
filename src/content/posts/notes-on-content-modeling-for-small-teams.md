---
title: "Notes on Content Modeling for Small Teams"
created-on: "2022-09-06T05:30:00Z"
updated-on: "2022-09-29T05:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that content modeling is solved. Spend a week with small teams and that consensus falls apart quickly.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.

If you take one thing away, make it this: decide on purpose, and write the decision down.
