---
title: "Rethinking Schema Validation for Solo Developers"
created-on: "2023-02-01T00:45:00Z"
updated-on: "2023-02-02T00:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Cache by content hash, not by timestamp.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
