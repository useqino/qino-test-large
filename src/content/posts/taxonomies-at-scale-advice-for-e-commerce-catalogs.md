---
title: "Taxonomies at Scale: Advice for E-commerce Catalogs"
created-on: "2024-04-29T18:30:00Z"
updated-on: "2024-05-05T18:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/camille-laurent.json"
category: "categories/type-safety.json"
---

taxonomies sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
