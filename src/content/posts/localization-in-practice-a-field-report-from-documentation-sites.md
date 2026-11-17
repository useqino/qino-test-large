---
title: "Localization in Practice: A Field Report from Documentation Sites"
created-on: "2026-10-11T01:30:00Z"
updated-on: "2026-11-27T01:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that localization is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
