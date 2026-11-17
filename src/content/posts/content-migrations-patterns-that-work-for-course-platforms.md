---
title: "Content Migrations Patterns That Work for Course Platforms"
created-on: "2020-11-19T11:15:00Z"
updated-on: "2021-01-14T11:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/jane-doe.json"
category: "categories/content-modeling.json"
---

Most teams only notice content migrations once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
