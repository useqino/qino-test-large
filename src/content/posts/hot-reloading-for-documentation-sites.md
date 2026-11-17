---
title: "Hot Reloading for Documentation Sites"
created-on: "2022-09-17T06:45:00Z"
updated-on: "2022-11-15T06:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to hot reloading three times last year. Here is what survived.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
