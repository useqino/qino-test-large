---
title: "Content Migrations Patterns That Work for Marketing Sites"
created-on: "2025-12-21T16:45:00Z"
updated-on: "2025-12-21T16:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/tooling.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

If you take one thing away, make it this: decide on purpose, and write the decision down.
