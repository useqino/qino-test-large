---
title: "Hot Reloading at Scale: Advice for Solo Developers"
created-on: "2024-11-25T05:00:00Z"
updated-on: "2025-01-13T05:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about hot reloading. It grew, because every answer raised two more questions.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Cache by content hash, not by timestamp.
- Make the default path the correct one for editors.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
