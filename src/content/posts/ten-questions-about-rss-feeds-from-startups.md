---
title: "Ten Questions About RSS Feeds from Startups"
created-on: "2023-02-11T21:15:00Z"
updated-on: "2023-02-23T21:15:00Z"
image: "/images/mountain-river.webp"
author: "authors/yuki-sato.json"
category: "categories/philosophy.json"
---

If you work with startups, you have probably met rss feeds in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
