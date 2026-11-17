---
title: "How Documentation Sites Approach Git-Based Publishing"
created-on: "2024-06-10T09:30:00Z"
updated-on: "2024-07-04T09:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

Most teams only notice git-based publishing once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
