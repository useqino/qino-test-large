---
title: "Debugging Flat-File Storage as Small Teams"
created-on: "2022-09-27T03:00:00Z"
updated-on: "2022-11-17T03:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/type-safety.json"
---

We rebuilt our approach to flat-file storage three times last year. Here is what survived.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
