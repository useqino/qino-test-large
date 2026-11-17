---
title: "A Second Look at Pagination for Documentation Sites"
created-on: "2021-11-13T10:00:00Z"
updated-on: "2021-12-07T10:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/jane-doe.json"
category: "categories/seo.json"
---

There is a quiet consensus that pagination is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## Trade-offs

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
