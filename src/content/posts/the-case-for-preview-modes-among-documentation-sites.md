---
title: "The Case for Preview Modes Among Documentation Sites"
created-on: "2021-08-02T18:15:00Z"
updated-on: "2021-09-05T18:15:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

There is a quiet consensus that preview modes is solved. Spend a week with documentation sites and that consensus falls apart quickly.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
