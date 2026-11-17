---
title: "What Open Source Projects Get Wrong About Code Highlighting"
created-on: "2021-11-30T15:00:00Z"
updated-on: "2022-01-12T15:00:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/seo.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## What to try next

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Cache by content hash, not by timestamp.

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
