---
title: "Debugging Content Audits as Small Teams"
created-on: "2025-05-12T07:30:00Z"
updated-on: "2025-07-02T07:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/migration.json"
---

If you work with small teams, you have probably met content audits in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.
- Store media next to the content that uses it, or in one well-named folder.

If you take one thing away, make it this: decide on purpose, and write the decision down.
