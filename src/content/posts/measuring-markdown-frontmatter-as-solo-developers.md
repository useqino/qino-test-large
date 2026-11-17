---
title: "Measuring Markdown Frontmatter as Solo Developers"
created-on: "2022-10-06T04:30:00Z"
updated-on: "2022-10-24T04:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/performance.json"
---

If you work with solo developers, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
