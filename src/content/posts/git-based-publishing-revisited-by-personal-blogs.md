---
title: "Git-Based Publishing, Revisited by Personal Blogs"
created-on: "2025-03-31T09:45:00Z"
updated-on: "2025-04-02T09:45:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

git-based publishing sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.
- Keep one schema per collection and version it with the content.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
