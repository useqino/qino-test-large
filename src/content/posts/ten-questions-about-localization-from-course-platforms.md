---
title: "Ten Questions About Localization from Course Platforms"
created-on: "2025-06-18T23:15:00Z"
updated-on: "2025-06-19T23:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/migration.json"
---

There is a quiet consensus that localization is solved. Spend a week with course platforms and that consensus falls apart quickly.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
