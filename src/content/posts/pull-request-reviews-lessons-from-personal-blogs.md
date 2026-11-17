---
title: "Pull Request Reviews: Lessons from Personal Blogs"
created-on: "2026-06-18T21:15:00Z"
updated-on: "2026-06-21T21:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to pull request reviews three times last year. Here is what survived.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
