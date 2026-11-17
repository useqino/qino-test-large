---
title: "The Case for Headless CMSes Among Agencies"
created-on: "2024-10-09T21:30:00Z"
updated-on: "2024-10-18T21:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/tomas-silva.json"
category: "categories/content-modeling.json"
---

Most teams only notice headless cmses once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## Trade-offs

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Run the same checks locally and in CI.
- Make the default path the correct one for editors.
- Document every field that is not self-explanatory.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## The checklist

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
