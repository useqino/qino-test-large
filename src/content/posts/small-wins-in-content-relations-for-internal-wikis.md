---
title: "Small Wins in Content Relations for Internal Wikis"
created-on: "2022-12-20T17:00:00Z"
updated-on: "2023-02-06T17:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/yuki-sato.json"
category: "categories/editorial.json"
---

content relations sounds like a detail. It is actually a decision that shapes how every future change lands.

## What to try next

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
