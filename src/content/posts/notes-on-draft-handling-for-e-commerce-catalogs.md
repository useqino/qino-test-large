---
title: "Notes on Draft Handling for E-commerce Catalogs"
created-on: "2025-01-27T05:45:00Z"
updated-on: "2025-01-28T05:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to draft handling three times last year. Here is what survived.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
