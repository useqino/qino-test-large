---
title: "Debugging Rich Text Editors as Enterprises"
created-on: "2025-05-05T03:30:00Z"
updated-on: "2025-06-02T03:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/hanna-voss.json"
category: "categories/architecture.json"
---

If you work with enterprises, you have probably met rich text editors in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

If you take one thing away, make it this: decide on purpose, and write the decision down.
