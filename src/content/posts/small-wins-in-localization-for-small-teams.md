---
title: "Small Wins in Localization for Small Teams"
created-on: "2022-04-30T01:15:00Z"
updated-on: "2022-05-20T01:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

Most teams only notice localization once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Cache by content hash, not by timestamp.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## Trade-offs

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
