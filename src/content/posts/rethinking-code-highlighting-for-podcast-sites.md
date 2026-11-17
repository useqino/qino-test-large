---
title: "Rethinking Code Highlighting for Podcast Sites"
created-on: "2025-11-16T15:00:00Z"
updated-on: "2026-01-10T15:00:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/mei-tanaka.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
