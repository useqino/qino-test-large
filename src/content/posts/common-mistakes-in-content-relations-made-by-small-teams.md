---
title: "Common Mistakes in Content Relations Made by Small Teams"
created-on: "2024-10-19T15:15:00Z"
updated-on: "2024-11-26T15:15:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/yuki-sato.json"
category: "categories/migration.json"
---

We rebuilt our approach to content relations three times last year. Here is what survived.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
