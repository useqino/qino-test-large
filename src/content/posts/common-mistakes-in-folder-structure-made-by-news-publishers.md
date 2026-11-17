---
title: "Common Mistakes in Folder Structure Made by News Publishers"
created-on: "2025-03-22T21:15:00Z"
updated-on: "2025-04-23T21:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

We rebuilt our approach to folder structure three times last year. Here is what survived.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
