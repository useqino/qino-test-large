---
title: "A Second Look at Content Linting for Enterprises"
created-on: "2021-08-09T17:45:00Z"
updated-on: "2021-08-10T17:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

If you work with enterprises, you have probably met content linting in its least friendly form: undocumented, half-automated, and owned by nobody.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
