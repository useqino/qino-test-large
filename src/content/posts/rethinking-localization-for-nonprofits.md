---
title: "Rethinking Localization for Nonprofits"
created-on: "2023-05-10T05:45:00Z"
updated-on: "2023-05-14T05:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

We rebuilt our approach to localization three times last year. Here is what survived.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

If you take one thing away, make it this: decide on purpose, and write the decision down.
