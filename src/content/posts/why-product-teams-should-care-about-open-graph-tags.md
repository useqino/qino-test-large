---
title: "Why Product Teams Should Care About Open Graph Tags"
created-on: "2025-01-22T22:45:00Z"
updated-on: "2025-02-22T22:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/lars-eriksson.json"
category: "categories/editorial.json"
---

We rebuilt our approach to open graph tags three times last year. Here is what survived.

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
