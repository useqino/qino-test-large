---
title: "A Second Look at Localization for Large Archives"
created-on: "2021-05-17T00:45:00Z"
updated-on: "2021-05-23T00:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

Most teams only notice localization once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

If you take one thing away, make it this: decide on purpose, and write the decision down.
