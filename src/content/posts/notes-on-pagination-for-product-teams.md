---
title: "Notes on Pagination for Product Teams"
created-on: "2024-03-03T16:15:00Z"
updated-on: "2024-03-16T16:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/type-safety.json"
---

Most teams only notice pagination once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
