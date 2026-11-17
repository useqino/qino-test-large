---
title: "Sitemaps in Practice: A Field Report from Design Systems"
created-on: "2026-04-11T18:15:00Z"
updated-on: "2026-04-21T18:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/seo.json"
---

There is a quiet consensus that sitemaps is solved. Spend a week with design systems and that consensus falls apart quickly.

## Where it goes wrong

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

> None of this is glamorous. It is the kind of work that makes the glamorous work possible.

## What we changed

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

## What to try next

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
