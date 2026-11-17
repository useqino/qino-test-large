---
title: "Teaching Rich Text Editors to Nonprofits"
created-on: "2022-01-18T23:00:00Z"
updated-on: "2022-02-26T23:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/tooling.json"
---

Most teams only notice rich text editors once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
