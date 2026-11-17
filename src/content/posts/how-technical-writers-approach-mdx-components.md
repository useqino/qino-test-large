---
title: "How Technical Writers Approach MDX Components"
created-on: "2025-02-21T00:30:00Z"
updated-on: "2025-03-30T00:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

There is a quiet consensus that mdx components is solved. Spend a week with technical writers and that consensus falls apart quickly.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.

If you take one thing away, make it this: decide on purpose, and write the decision down.
