---
title: "What Large Archives Get Wrong About Markdown Frontmatter"
created-on: "2023-12-12T06:30:00Z"
updated-on: "2024-01-07T06:30:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

markdown frontmatter sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
