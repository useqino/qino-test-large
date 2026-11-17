---
title: "Teaching Author Profiles to Solo Developers"
created-on: "2023-10-10T13:15:00Z"
updated-on: "2023-10-29T13:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/markdown.json"
---

We rebuilt our approach to author profiles three times last year. Here is what survived.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
