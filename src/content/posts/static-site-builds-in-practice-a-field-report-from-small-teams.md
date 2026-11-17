---
title: "Static Site Builds in Practice: A Field Report from Small Teams"
created-on: "2022-11-22T07:00:00Z"
updated-on: "2023-01-18T07:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/camille-laurent.json"
category: "categories/seo.json"
---

There is a quiet consensus that static site builds is solved. Spend a week with small teams and that consensus falls apart quickly.

## Where it goes wrong

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const posts = await postCollection.getEntries();
const recent = posts.filter((post) => post.createdOn > cutoff);
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
