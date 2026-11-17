---
title: "Folder Structure and the Long Tail of Solo Developers"
created-on: "2026-05-25T15:00:00Z"
updated-on: "2026-06-27T15:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## In practice

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Run the same checks locally and in CI.
- Generate types from the schema rather than writing them twice.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Cache by content hash, not by timestamp.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

> Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
