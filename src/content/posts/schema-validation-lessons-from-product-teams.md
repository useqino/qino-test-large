---
title: "Schema Validation: Lessons from Product Teams"
created-on: "2022-07-02T17:30:00Z"
updated-on: "2022-07-16T17:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

Most teams only notice schema validation once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
