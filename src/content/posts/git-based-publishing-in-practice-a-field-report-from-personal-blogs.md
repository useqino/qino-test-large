---
title: "Git-Based Publishing in Practice: A Field Report from Personal Blogs"
created-on: "2025-05-13T15:00:00Z"
updated-on: "2025-06-26T15:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that git-based publishing is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
