---
title: "Why Marketing Sites Should Care About Headless CMSes"
created-on: "2022-09-16T17:45:00Z"
updated-on: "2022-10-03T17:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/priya-krishnan.json"
category: "categories/performance.json"
---

headless cmses sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
