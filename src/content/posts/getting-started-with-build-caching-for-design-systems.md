---
title: "Getting Started with Build Caching for Design Systems"
created-on: "2021-06-13T05:30:00Z"
updated-on: "2021-08-03T05:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/migration.json"
---

There is a quiet consensus that build caching is solved. Spend a week with design systems and that consensus falls apart quickly.

## What we changed

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
