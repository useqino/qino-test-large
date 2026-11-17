---
title: "Alt Text at Scale: Advice for E-commerce Catalogs"
created-on: "2022-11-02T05:15:00Z"
updated-on: "2022-12-05T05:15:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that alt text is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
