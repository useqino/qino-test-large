---
title: "A Practical Guide to Content Relations for Product Teams"
created-on: "2022-02-06T03:30:00Z"
updated-on: "2022-02-21T03:30:00Z"
image: "/images/rolling-hills.webp"
author: "authors/raj-patel.json"
category: "categories/tooling.json"
---

There is a quiet consensus that content relations is solved. Spend a week with product teams and that consensus falls apart quickly.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.
- Prefer small, frequent changes over large content drops.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Document every field that is not self-explanatory.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
