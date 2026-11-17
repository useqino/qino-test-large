---
title: "Content Relations in Practice: A Field Report from Nonprofits"
created-on: "2023-12-06T10:00:00Z"
updated-on: "2023-12-19T10:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about content relations. It grew, because every answer raised two more questions.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
