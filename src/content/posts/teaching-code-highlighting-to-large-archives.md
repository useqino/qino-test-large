---
title: "Teaching Code Highlighting to Large Archives"
created-on: "2020-11-09T00:45:00Z"
updated-on: "2020-11-12T00:45:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

There is a quiet consensus that code highlighting is solved. Spend a week with large archives and that consensus falls apart quickly.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Generate types from the schema rather than writing them twice.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Keep one schema per collection and version it with the content.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
