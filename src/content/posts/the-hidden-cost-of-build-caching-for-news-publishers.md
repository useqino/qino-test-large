---
title: "The Hidden Cost of Build Caching for News Publishers"
created-on: "2025-06-08T00:00:00Z"
updated-on: "2025-06-25T00:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

If you work with news publishers, you have probably met build caching in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
