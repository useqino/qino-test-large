---
title: "A Second Look at Media Management for Documentation Sites"
created-on: "2025-02-27T11:30:00Z"
updated-on: "2025-03-09T11:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

We rebuilt our approach to media management three times last year. Here is what survived.

## What to try next

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

If you take one thing away, make it this: decide on purpose, and write the decision down.
