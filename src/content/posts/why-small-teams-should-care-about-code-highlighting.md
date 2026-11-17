---
title: "Why Small Teams Should Care About Code Highlighting"
created-on: "2022-02-23T21:00:00Z"
updated-on: "2022-03-04T21:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/tooling.json"
---

We rebuilt our approach to code highlighting three times last year. Here is what survived.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
