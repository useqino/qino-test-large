---
title: "Markdown Frontmatter in Practice: A Field Report from Nonprofits"
created-on: "2024-02-24T08:45:00Z"
updated-on: "2024-04-07T08:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
