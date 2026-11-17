---
title: "Small Wins in Hot Reloading for Large Archives"
created-on: "2025-06-22T13:45:00Z"
updated-on: "2025-08-13T13:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/migration.json"
---

hot reloading sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
