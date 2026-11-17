---
title: "Why Course Platforms Should Care About Taxonomies"
created-on: "2021-09-15T13:30:00Z"
updated-on: "2021-10-28T13:30:00Z"
image: "/images/mountain-rocks.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

taxonomies sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.
- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
