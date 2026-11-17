---
title: "Preview Modes for Technical Writers"
created-on: "2023-03-20T23:45:00Z"
updated-on: "2023-05-07T23:45:00Z"
image: "/images/mountain-river.webp"
author: "authors/felix-berger.json"
category: "categories/content-modeling.json"
---

This post started as a short note to a colleague about preview modes. It grew, because every answer raised two more questions.

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## What we changed

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
