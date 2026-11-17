---
title: "Why Agencies Should Care About Search Indexing"
created-on: "2024-11-05T13:15:00Z"
updated-on: "2024-12-14T13:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/mei-tanaka.json"
category: "categories/performance.json"
---

We rebuilt our approach to search indexing three times last year. Here is what survived.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
