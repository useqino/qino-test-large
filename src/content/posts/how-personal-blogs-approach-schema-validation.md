---
title: "How Personal Blogs Approach Schema Validation"
created-on: "2024-01-13T18:45:00Z"
updated-on: "2024-02-28T18:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/felix-berger.json"
category: "categories/architecture.json"
---

We rebuilt our approach to schema validation three times last year. Here is what survived.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
