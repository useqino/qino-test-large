---
title: "What Internal Wikis Get Wrong About Content Relations"
created-on: "2021-06-30T05:45:00Z"
updated-on: "2021-07-12T05:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/felix-berger.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about content relations. It grew, because every answer raised two more questions.

## In practice

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
