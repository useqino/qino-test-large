---
title: "Measuring Markdown Frontmatter as Large Archives"
created-on: "2026-02-24T02:15:00Z"
updated-on: "2026-04-05T02:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/tooling.json"
---

If you work with large archives, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
