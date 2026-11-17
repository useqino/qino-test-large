---
title: "Measuring Markdown Frontmatter as Marketing Sites"
created-on: "2025-02-23T15:15:00Z"
updated-on: "2025-03-12T15:15:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

If you work with marketing sites, you have probably met markdown frontmatter in its least friendly form: undocumented, half-automated, and owned by nobody.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

- Prefer small, frequent changes over large content drops.
- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Fail the build on broken relations instead of logging a warning.
- Delete unused entries instead of hiding them.
- Run the same checks locally and in CI.
- Store media next to the content that uses it, or in one well-named folder.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
