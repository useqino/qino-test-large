---
title: "The Case for Media Management Among Design Systems"
created-on: "2021-12-05T22:15:00Z"
updated-on: "2022-01-02T22:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/editorial.json"
---

media management sounds like a detail. It is actually a decision that shapes how every future change lands.

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## In practice

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
