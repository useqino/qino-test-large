---
title: "Notes on Localization for Technical Writers"
created-on: "2021-02-15T07:30:00Z"
updated-on: "2021-03-07T07:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/felix-berger.json"
category: "categories/migration.json"
---

There is a quiet consensus that localization is solved. Spend a week with technical writers and that consensus falls apart quickly.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> If you take one thing away, make it this: decide on purpose, and write the decision down.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
