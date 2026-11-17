---
title: "Structured Data for Solo Developers"
created-on: "2024-09-21T20:45:00Z"
updated-on: "2024-11-09T20:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

We rebuilt our approach to structured data three times last year. Here is what survived.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
