---
title: "Flat-File Storage and the Long Tail of News Publishers"
created-on: "2026-04-18T22:45:00Z"
updated-on: "2026-06-15T22:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

If you take one thing away, make it this: decide on purpose, and write the decision down.
