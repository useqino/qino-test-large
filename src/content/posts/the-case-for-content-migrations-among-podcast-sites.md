---
title: "The Case for Content Migrations Among Podcast Sites"
created-on: "2023-05-28T15:15:00Z"
updated-on: "2023-06-12T15:15:00Z"
image: "/images/rolling-hills.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to content migrations three times last year. Here is what survived.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

If you take one thing away, make it this: decide on purpose, and write the decision down.
