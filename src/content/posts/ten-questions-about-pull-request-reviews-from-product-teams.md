---
title: "Ten Questions About Pull Request Reviews from Product Teams"
created-on: "2021-05-24T11:30:00Z"
updated-on: "2021-07-12T11:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/mei-tanaka.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about pull request reviews. It grew, because every answer raised two more questions.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

If you take one thing away, make it this: decide on purpose, and write the decision down.
