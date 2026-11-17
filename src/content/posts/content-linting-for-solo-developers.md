---
title: "Content Linting for Solo Developers"
created-on: "2020-12-21T06:30:00Z"
updated-on: "2020-12-29T06:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

If you take one thing away, make it this: decide on purpose, and write the decision down.
