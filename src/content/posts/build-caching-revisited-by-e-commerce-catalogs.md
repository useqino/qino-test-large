---
title: "Build Caching, Revisited by E-commerce Catalogs"
created-on: "2022-02-11T11:45:00Z"
updated-on: "2022-03-18T11:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/tooling.json"
---

Most teams only notice build caching once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Store media next to the content that uses it, or in one well-named folder.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
