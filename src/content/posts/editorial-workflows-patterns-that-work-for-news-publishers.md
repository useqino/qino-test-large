---
title: "Editorial Workflows Patterns That Work for News Publishers"
created-on: "2021-06-23T13:45:00Z"
updated-on: "2021-07-01T13:45:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

editorial workflows sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
