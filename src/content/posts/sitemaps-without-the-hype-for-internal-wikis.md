---
title: "Sitemaps Without the Hype, for Internal Wikis"
created-on: "2024-04-20T03:30:00Z"
updated-on: "2024-05-16T03:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

sitemaps sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
