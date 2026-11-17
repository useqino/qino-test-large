---
title: "A Practical Guide to Content Linting for Design Systems"
created-on: "2021-12-03T10:30:00Z"
updated-on: "2022-01-15T10:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

We rebuilt our approach to content linting three times last year. Here is what survived.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
