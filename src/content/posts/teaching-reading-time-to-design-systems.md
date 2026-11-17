---
title: "Teaching Reading Time to Design Systems"
created-on: "2023-03-27T05:30:00Z"
updated-on: "2023-04-14T05:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that reading time is solved. Spend a week with design systems and that consensus falls apart quickly.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
