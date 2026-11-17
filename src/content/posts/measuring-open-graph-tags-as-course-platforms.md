---
title: "Measuring Open Graph Tags as Course Platforms"
created-on: "2023-05-30T09:45:00Z"
updated-on: "2023-07-23T09:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

There is a quiet consensus that open graph tags is solved. Spend a week with course platforms and that consensus falls apart quickly.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
