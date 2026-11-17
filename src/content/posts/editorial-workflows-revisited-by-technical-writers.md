---
title: "Editorial Workflows, Revisited by Technical Writers"
created-on: "2026-03-13T12:45:00Z"
updated-on: "2026-03-21T12:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
