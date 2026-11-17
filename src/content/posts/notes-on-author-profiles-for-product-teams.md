---
title: "Notes on Author Profiles for Product Teams"
created-on: "2025-09-27T13:00:00Z"
updated-on: "2025-11-02T13:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/diego-moreno.json"
category: "categories/philosophy.json"
---

There is a quiet consensus that author profiles is solved. Spend a week with product teams and that consensus falls apart quickly.

## Where it goes wrong

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Store media next to the content that uses it, or in one well-named folder.
- Run the same checks locally and in CI.
- Fail the build on broken relations instead of logging a warning.
- Keep one schema per collection and version it with the content.

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
