---
title: "A Second Look at Content Linting for Product Teams"
created-on: "2025-12-30T10:45:00Z"
updated-on: "2026-01-22T10:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/editorial.json"
---

Most teams only notice content linting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## The checklist

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
