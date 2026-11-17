---
title: "Getting Started with Content Modeling for Startups"
created-on: "2021-02-01T12:00:00Z"
updated-on: "2021-02-26T12:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

We rebuilt our approach to content modeling three times last year. Here is what survived.

## Edge cases

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
