---
title: "Link Checking: Lessons from Documentation Sites"
created-on: "2025-03-12T14:15:00Z"
updated-on: "2025-04-05T14:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/migration.json"
---

We rebuilt our approach to link checking three times last year. Here is what survived.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.
- Make the default path the correct one for editors.
- Cache by content hash, not by timestamp.
- Fail the build on broken relations instead of logging a warning.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
