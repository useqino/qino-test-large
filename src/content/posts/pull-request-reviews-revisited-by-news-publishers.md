---
title: "Pull Request Reviews, Revisited by News Publishers"
created-on: "2023-04-15T11:45:00Z"
updated-on: "2023-04-21T11:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

If you work with news publishers, you have probably met pull request reviews in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
