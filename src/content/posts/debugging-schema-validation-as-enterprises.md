---
title: "Debugging Schema Validation as Enterprises"
created-on: "2024-02-18T17:15:00Z"
updated-on: "2024-02-25T17:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## The checklist

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
