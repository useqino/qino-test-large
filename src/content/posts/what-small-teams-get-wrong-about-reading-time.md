---
title: "What Small Teams Get Wrong About Reading Time"
created-on: "2021-09-03T17:00:00Z"
updated-on: "2021-10-31T17:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

reading time sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
