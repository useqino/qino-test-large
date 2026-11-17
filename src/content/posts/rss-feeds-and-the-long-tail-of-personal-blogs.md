---
title: "RSS Feeds and the Long Tail of Personal Blogs"
created-on: "2020-11-17T07:30:00Z"
updated-on: "2020-11-23T07:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

There is a quiet consensus that rss feeds is solved. Spend a week with personal blogs and that consensus falls apart quickly.

## A simpler model

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
