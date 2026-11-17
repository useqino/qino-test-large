---
title: "Small Wins in Media Management for Startups"
created-on: "2022-12-20T19:15:00Z"
updated-on: "2023-01-17T19:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

If you work with startups, you have probably met media management in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Make the default path the correct one for editors.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
