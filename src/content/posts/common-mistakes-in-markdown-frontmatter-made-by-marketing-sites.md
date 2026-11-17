---
title: "Common Mistakes in Markdown Frontmatter Made by Marketing Sites"
created-on: "2023-08-07T16:30:00Z"
updated-on: "2023-08-09T16:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

We rebuilt our approach to markdown frontmatter three times last year. Here is what survived.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
