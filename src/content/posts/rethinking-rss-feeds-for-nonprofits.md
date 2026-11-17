---
title: "Rethinking RSS Feeds for Nonprofits"
created-on: "2023-06-28T05:45:00Z"
updated-on: "2023-08-26T05:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/editorial.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## Where it goes wrong

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## A simpler model

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
