---
title: "Draft Handling in Practice: A Field Report from Enterprises"
created-on: "2024-03-23T08:00:00Z"
updated-on: "2024-05-01T08:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with enterprises and that consensus falls apart quickly.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
