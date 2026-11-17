---
title: "Structured Data in Practice: A Field Report from Nonprofits"
created-on: "2023-09-24T18:00:00Z"
updated-on: "2023-10-21T18:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

Most teams only notice structured data once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
