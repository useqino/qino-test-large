---
title: "Markdown Frontmatter, Revisited by Solo Developers"
created-on: "2021-09-21T03:30:00Z"
updated-on: "2021-09-26T03:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

If you work with solo developers, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
