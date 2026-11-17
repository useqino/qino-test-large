---
title: "Common Mistakes in Sitemaps Made by Documentation Sites"
created-on: "2022-01-26T14:15:00Z"
updated-on: "2022-02-28T14:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

If you work with documentation sites, you have probably met sitemaps in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
