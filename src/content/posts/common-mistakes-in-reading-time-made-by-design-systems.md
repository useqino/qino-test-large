---
title: "Common Mistakes in Reading Time Made by Design Systems"
created-on: "2025-01-25T23:00:00Z"
updated-on: "2025-02-12T23:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

If you work with design systems, you have probably met reading time in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
