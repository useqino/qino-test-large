---
title: "Sitemaps, Revisited by Technical Writers"
created-on: "2023-06-12T09:15:00Z"
updated-on: "2023-07-21T09:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/jane-doe.json"
category: "categories/tooling.json"
---

If you work with technical writers, you have probably met sitemaps in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
