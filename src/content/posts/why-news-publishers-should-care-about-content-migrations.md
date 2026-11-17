---
title: "Why News Publishers Should Care About Content Migrations"
created-on: "2022-03-25T17:45:00Z"
updated-on: "2022-04-02T17:45:00Z"
image: "/images/farm-landscape.webp"
author: "authors/tomas-silva.json"
category: "categories/performance.json"
---

content migrations sounds like a detail. It is actually a decision that shapes how every future change lands.

## The checklist

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Trade-offs

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.
- Delete unused entries instead of hiding them.
- Fail the build on broken relations instead of logging a warning.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
