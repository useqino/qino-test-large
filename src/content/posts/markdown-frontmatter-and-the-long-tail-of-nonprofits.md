---
title: "Markdown Frontmatter and the Long Tail of Nonprofits"
created-on: "2023-11-15T13:45:00Z"
updated-on: "2023-12-03T13:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

If you work with nonprofits, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
