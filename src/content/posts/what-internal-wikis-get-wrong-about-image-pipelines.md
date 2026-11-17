---
title: "What Internal Wikis Get Wrong About Image Pipelines"
created-on: "2021-09-01T14:00:00Z"
updated-on: "2021-10-03T14:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that image pipelines is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Cache by content hash, not by timestamp.
- Document every field that is not self-explanatory.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
