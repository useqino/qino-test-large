---
title: "A Practical Guide to Content Audits for Content Editors"
created-on: "2025-03-24T05:30:00Z"
updated-on: "2025-04-20T05:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

If you work with content editors, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## Where it goes wrong

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
