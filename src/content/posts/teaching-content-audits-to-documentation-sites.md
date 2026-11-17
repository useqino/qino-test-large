---
title: "Teaching Content Audits to Documentation Sites"
created-on: "2022-12-23T01:30:00Z"
updated-on: "2023-01-29T01:30:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

If you work with documentation sites, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.
- Delete unused entries instead of hiding them.

If you take one thing away, make it this: decide on purpose, and write the decision down.
