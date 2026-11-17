---
title: "Pagination in Practice: A Field Report from Design Systems"
created-on: "2023-08-11T12:30:00Z"
updated-on: "2023-08-16T12:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/markdown.json"
---

If you work with design systems, you have probably met pagination in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
