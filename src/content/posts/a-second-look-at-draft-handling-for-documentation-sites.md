---
title: "A Second Look at Draft Handling for Documentation Sites"
created-on: "2022-10-09T23:45:00Z"
updated-on: "2022-11-11T23:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

This post started as a short note to a colleague about draft handling. It grew, because every answer raised two more questions.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
