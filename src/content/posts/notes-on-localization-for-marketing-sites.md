---
title: "Notes on Localization for Marketing Sites"
created-on: "2021-03-15T21:00:00Z"
updated-on: "2021-05-03T21:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/tomas-silva.json"
category: "categories/philosophy.json"
---

Most teams only notice localization once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.
- Prefer small, frequent changes over large content drops.
- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
