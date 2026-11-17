---
title: "Teaching Code Highlighting to Marketing Sites"
created-on: "2022-10-06T23:30:00Z"
updated-on: "2022-12-01T23:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with marketing sites and that consensus falls apart quickly.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
