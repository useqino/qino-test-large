---
title: "Why Open Source Projects Should Care About Content Audits"
created-on: "2020-11-12T08:45:00Z"
updated-on: "2020-12-20T08:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

If you work with open source projects, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## What we changed

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
