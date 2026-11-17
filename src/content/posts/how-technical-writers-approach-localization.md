---
title: "How Technical Writers Approach Localization"
created-on: "2023-02-21T23:00:00Z"
updated-on: "2023-04-01T23:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

localization sounds like a detail. It is actually a decision that shapes how every future change lands.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Keep one schema per collection and version it with the content.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
