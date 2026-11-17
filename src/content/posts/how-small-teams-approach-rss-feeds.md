---
title: "How Small Teams Approach RSS Feeds"
created-on: "2024-02-01T01:15:00Z"
updated-on: "2024-03-24T01:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

rss feeds sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
