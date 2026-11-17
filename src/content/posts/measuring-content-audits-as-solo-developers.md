---
title: "Measuring Content Audits as Solo Developers"
created-on: "2024-07-26T16:30:00Z"
updated-on: "2024-09-06T16:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

content audits sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## Where it goes wrong

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
