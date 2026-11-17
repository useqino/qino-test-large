---
title: "Headless CMSes: Lessons from Marketing Sites"
created-on: "2023-12-01T01:00:00Z"
updated-on: "2024-01-24T01:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/performance.json"
---

If you work with marketing sites, you have probably met headless cmses in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
