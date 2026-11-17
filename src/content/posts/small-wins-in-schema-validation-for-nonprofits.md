---
title: "Small Wins in Schema Validation for Nonprofits"
created-on: "2024-03-25T13:15:00Z"
updated-on: "2024-04-18T13:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

schema validation sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
