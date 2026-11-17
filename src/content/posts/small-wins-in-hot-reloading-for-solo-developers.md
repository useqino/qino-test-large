---
title: "Small Wins in Hot Reloading for Solo Developers"
created-on: "2024-02-13T05:00:00Z"
updated-on: "2024-03-10T05:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

Most teams only notice hot reloading once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
