---
title: "Content Linting at Scale: Advice for Solo Developers"
created-on: "2025-05-25T07:15:00Z"
updated-on: "2025-06-19T07:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/priya-krishnan.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that content linting is solved. Spend a week with solo developers and that consensus falls apart quickly.

## The checklist

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Document every field that is not self-explanatory.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
