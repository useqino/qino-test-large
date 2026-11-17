---
title: "Code Highlighting, Revisited by Solo Developers"
created-on: "2023-07-09T14:00:00Z"
updated-on: "2023-08-30T14:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
