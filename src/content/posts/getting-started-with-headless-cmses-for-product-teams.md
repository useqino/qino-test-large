---
title: "Getting Started with Headless CMSes for Product Teams"
created-on: "2024-01-30T21:00:00Z"
updated-on: "2024-02-02T21:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

We rebuilt our approach to headless cmses three times last year. Here is what survived.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
