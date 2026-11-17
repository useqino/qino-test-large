---
title: "Redirect Maps for Agencies"
created-on: "2022-12-18T03:30:00Z"
updated-on: "2023-01-29T03:30:00Z"
image: "/images/farm-landscape.webp"
author: "authors/priya-krishnan.json"
category: "categories/content-modeling.json"
---

Most teams only notice redirect maps once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
