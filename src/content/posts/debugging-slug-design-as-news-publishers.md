---
title: "Debugging Slug Design as News Publishers"
created-on: "2021-12-01T03:30:00Z"
updated-on: "2021-12-09T03:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

slug design sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
