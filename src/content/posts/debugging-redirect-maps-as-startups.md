---
title: "Debugging Redirect Maps as Startups"
created-on: "2023-10-14T19:15:00Z"
updated-on: "2023-12-09T19:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

We rebuilt our approach to redirect maps three times last year. Here is what survived.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

If you take one thing away, make it this: decide on purpose, and write the decision down.
