---
title: "Teaching Type-Safe Content to Small Teams"
created-on: "2021-02-28T02:30:00Z"
updated-on: "2021-03-17T02:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/amara-okonkwo.json"
category: "categories/architecture.json"
---

If you work with small teams, you have probably met type-safe content in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
