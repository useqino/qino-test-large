---
title: "Common Mistakes in Taxonomies Made by Nonprofits"
created-on: "2024-08-27T01:30:00Z"
updated-on: "2024-09-05T01:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

Most teams only notice taxonomies once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
