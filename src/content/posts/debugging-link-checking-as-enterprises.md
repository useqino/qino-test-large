---
title: "Debugging Link Checking as Enterprises"
created-on: "2024-03-15T17:30:00Z"
updated-on: "2024-05-01T17:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/performance.json"
---

If you work with enterprises, you have probably met link checking in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
