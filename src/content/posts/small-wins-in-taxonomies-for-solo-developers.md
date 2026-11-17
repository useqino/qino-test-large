---
title: "Small Wins in Taxonomies for Solo Developers"
created-on: "2026-02-09T08:00:00Z"
updated-on: "2026-03-13T08:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

taxonomies sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
