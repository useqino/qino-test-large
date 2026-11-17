---
title: "Flat-File Storage, Revisited by Podcast Sites"
created-on: "2024-03-17T15:15:00Z"
updated-on: "2024-03-19T15:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/felix-berger.json"
category: "categories/tooling.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## A simpler model

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Generate types from the schema rather than writing them twice.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
