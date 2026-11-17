---
title: "Notes on Incremental Builds for Nonprofits"
created-on: "2024-10-05T15:30:00Z"
updated-on: "2024-10-26T15:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/camille-laurent.json"
category: "categories/editorial.json"
---

Most teams only notice incremental builds once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
