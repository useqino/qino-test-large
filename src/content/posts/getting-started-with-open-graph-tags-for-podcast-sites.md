---
title: "Getting Started with Open Graph Tags for Podcast Sites"
created-on: "2021-02-21T04:30:00Z"
updated-on: "2021-04-07T04:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

If you work with podcast sites, you have probably met open graph tags in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Keep one schema per collection and version it with the content.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

If you take one thing away, make it this: decide on purpose, and write the decision down.
