---
title: "A Checklist for Pull Request Reviews Aimed at Nonprofits"
created-on: "2024-04-03T15:15:00Z"
updated-on: "2024-04-08T15:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

If you work with nonprofits, you have probably met pull request reviews in its least friendly form: undocumented, half-automated, and owned by nobody.

## Edge cases

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## A simpler model

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
