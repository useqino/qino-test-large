---
title: "Why Small Teams Should Care About Flat-File Storage"
created-on: "2023-03-25T04:00:00Z"
updated-on: "2023-05-18T04:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that flat-file storage is solved. Spend a week with small teams and that consensus falls apart quickly.

## What to try next

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Make the default path the correct one for editors.
- Run the same checks locally and in CI.
- Document every field that is not self-explanatory.

## The checklist

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## In practice

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
