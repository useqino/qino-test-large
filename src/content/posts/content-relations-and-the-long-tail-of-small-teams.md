---
title: "Content Relations and the Long Tail of Small Teams"
created-on: "2025-12-08T14:30:00Z"
updated-on: "2026-01-24T14:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to content relations three times last year. Here is what survived.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
