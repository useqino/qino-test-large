---
title: "Ten Questions About Author Profiles from Small Teams"
created-on: "2023-06-12T13:15:00Z"
updated-on: "2023-07-09T13:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about author profiles. It grew, because every answer raised two more questions.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

> The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.

## The checklist

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
