---
title: "Debugging Taxonomies as News Publishers"
created-on: "2025-11-22T09:45:00Z"
updated-on: "2025-11-29T09:45:00Z"
image: "/images/rolling-hills.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

This post started as a short note to a colleague about taxonomies. It grew, because every answer raised two more questions.

## The checklist

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Document every field that is not self-explanatory.
- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
