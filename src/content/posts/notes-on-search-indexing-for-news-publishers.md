---
title: "Notes on Search Indexing for News Publishers"
created-on: "2026-08-30T12:15:00Z"
updated-on: "2026-10-13T12:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

If you work with news publishers, you have probably met search indexing in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
