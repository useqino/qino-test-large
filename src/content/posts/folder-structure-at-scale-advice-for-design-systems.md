---
title: "Folder Structure at Scale: Advice for Design Systems"
created-on: "2024-01-11T04:45:00Z"
updated-on: "2024-03-03T04:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## Edge cases

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
