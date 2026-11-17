---
title: "RSS Feeds and the Long Tail of Product Teams"
created-on: "2025-12-07T16:45:00Z"
updated-on: "2026-01-17T16:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
