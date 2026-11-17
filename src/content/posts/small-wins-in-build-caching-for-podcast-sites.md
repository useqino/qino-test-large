---
title: "Small Wins in Build Caching for Podcast Sites"
created-on: "2022-01-16T01:45:00Z"
updated-on: "2022-03-11T01:45:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/mei-tanaka.json"
category: "categories/architecture.json"
---

If you work with podcast sites, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
