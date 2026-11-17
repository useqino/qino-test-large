---
title: "Build Caching: Lessons from Small Teams"
created-on: "2021-09-12T21:30:00Z"
updated-on: "2021-10-23T21:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

Most teams only notice build caching once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

If you take one thing away, make it this: decide on purpose, and write the decision down.
