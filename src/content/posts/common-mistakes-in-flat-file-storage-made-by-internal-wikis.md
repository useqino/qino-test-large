---
title: "Common Mistakes in Flat-File Storage Made by Internal Wikis"
created-on: "2021-08-10T06:30:00Z"
updated-on: "2021-08-28T06:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/mei-tanaka.json"
category: "categories/editorial.json"
---

flat-file storage sounds like a detail. It is actually a decision that shapes how every future change lands.

## A simpler model

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
