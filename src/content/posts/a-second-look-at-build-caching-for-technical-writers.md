---
title: "A Second Look at Build Caching for Technical Writers"
created-on: "2025-05-12T10:00:00Z"
updated-on: "2025-06-23T10:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

If you work with technical writers, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
