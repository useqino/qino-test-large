---
title: "Content Migrations: Lessons from Documentation Sites"
created-on: "2023-04-11T00:30:00Z"
updated-on: "2023-05-10T00:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
