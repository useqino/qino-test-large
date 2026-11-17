---
title: "Editorial Workflows at Scale: Advice for Course Platforms"
created-on: "2025-06-17T09:00:00Z"
updated-on: "2025-08-15T09:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

We rebuilt our approach to editorial workflows three times last year. Here is what survived.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

## A simpler model

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
