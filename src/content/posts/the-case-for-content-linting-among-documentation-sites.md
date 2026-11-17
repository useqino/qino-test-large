---
title: "The Case for Content Linting Among Documentation Sites"
created-on: "2023-08-21T20:00:00Z"
updated-on: "2023-09-14T20:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/markdown.json"
---

content linting sounds like a detail. It is actually a decision that shapes how every future change lands.

## In practice

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
