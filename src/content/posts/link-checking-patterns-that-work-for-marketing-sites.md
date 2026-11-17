---
title: "Link Checking Patterns That Work for Marketing Sites"
created-on: "2024-10-31T11:30:00Z"
updated-on: "2024-11-10T11:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/type-safety.json"
---

link checking sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
