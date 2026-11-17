---
title: "Rich Text Editors in Practice: A Field Report from Open Source Projects"
created-on: "2023-11-02T11:30:00Z"
updated-on: "2023-12-05T11:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

We rebuilt our approach to rich text editors three times last year. Here is what survived.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
