---
title: "Common Mistakes in Reading Time Made by Open Source Projects"
created-on: "2022-08-12T22:45:00Z"
updated-on: "2022-08-30T22:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

There is a quiet consensus that reading time is solved. Spend a week with open source projects and that consensus falls apart quickly.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
