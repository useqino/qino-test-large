---
title: "Teaching Preview Modes to News Publishers"
created-on: "2026-06-12T03:45:00Z"
updated-on: "2026-07-21T03:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with news publishers and that consensus falls apart quickly.

## Edge cases

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
