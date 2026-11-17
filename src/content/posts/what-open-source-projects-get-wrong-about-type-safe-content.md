---
title: "What Open Source Projects Get Wrong About Type-Safe Content"
created-on: "2020-12-29T14:45:00Z"
updated-on: "2021-02-18T14:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about type-safe content. It grew, because every answer raised two more questions.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
