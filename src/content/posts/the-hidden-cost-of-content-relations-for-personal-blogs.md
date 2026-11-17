---
title: "The Hidden Cost of Content Relations for Personal Blogs"
created-on: "2023-01-18T15:30:00Z"
updated-on: "2023-02-15T15:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

content relations sounds like a detail. It is actually a decision that shapes how every future change lands.

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Edge cases

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
