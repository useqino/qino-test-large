---
title: "Notes on Code Highlighting for Product Teams"
created-on: "2022-12-06T18:30:00Z"
updated-on: "2023-02-01T18:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/seo.json"
---

We rebuilt our approach to code highlighting three times last year. Here is what survived.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
