---
title: "Rich Text Editors Without the Hype, for Content Editors"
created-on: "2024-06-28T08:15:00Z"
updated-on: "2024-06-29T08:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

Most teams only notice rich text editors once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
