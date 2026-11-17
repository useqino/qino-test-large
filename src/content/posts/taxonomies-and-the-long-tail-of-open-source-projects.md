---
title: "Taxonomies and the Long Tail of Open Source Projects"
created-on: "2025-02-17T19:15:00Z"
updated-on: "2025-03-17T19:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

Most teams only notice taxonomies once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
