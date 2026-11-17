---
title: "Rethinking MDX Components for Enterprises"
created-on: "2025-11-19T07:00:00Z"
updated-on: "2026-01-11T07:00:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to mdx components three times last year. Here is what survived.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
