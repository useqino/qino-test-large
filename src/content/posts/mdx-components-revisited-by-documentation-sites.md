---
title: "MDX Components, Revisited by Documentation Sites"
created-on: "2024-01-30T23:45:00Z"
updated-on: "2024-02-06T23:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/performance.json"
---

mdx components sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
