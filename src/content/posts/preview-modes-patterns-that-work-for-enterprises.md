---
title: "Preview Modes Patterns That Work for Enterprises"
created-on: "2026-06-22T19:15:00Z"
updated-on: "2026-07-03T19:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

If you work with enterprises, you have probably met preview modes in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
