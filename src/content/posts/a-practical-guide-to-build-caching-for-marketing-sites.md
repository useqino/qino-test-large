---
title: "A Practical Guide to Build Caching for Marketing Sites"
created-on: "2026-09-07T17:15:00Z"
updated-on: "2026-09-16T17:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about build caching. It grew, because every answer raised two more questions.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

If you take one thing away, make it this: decide on purpose, and write the decision down.
