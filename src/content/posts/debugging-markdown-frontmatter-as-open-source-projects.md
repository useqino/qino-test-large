---
title: "Debugging Markdown Frontmatter as Open Source Projects"
created-on: "2023-07-24T18:15:00Z"
updated-on: "2023-08-04T18:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

Most teams only notice markdown frontmatter once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
