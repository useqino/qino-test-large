---
title: "Draft Handling Without the Hype, for Internal Wikis"
created-on: "2021-03-07T05:30:00Z"
updated-on: "2021-03-14T05:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/diego-moreno.json"
category: "categories/tooling.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with internal wikis and that consensus falls apart quickly.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Delete unused entries instead of hiding them.
- Generate types from the schema rather than writing them twice.

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
