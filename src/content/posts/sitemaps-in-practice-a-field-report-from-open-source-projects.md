---
title: "Sitemaps in Practice: A Field Report from Open Source Projects"
created-on: "2023-02-14T10:00:00Z"
updated-on: "2023-03-11T10:00:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

If you take one thing away, make it this: decide on purpose, and write the decision down.
