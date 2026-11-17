---
title: "Content Linting Without the Hype, for Internal Wikis"
created-on: "2022-10-06T05:15:00Z"
updated-on: "2022-11-08T05:15:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

Most teams only notice content linting once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## Edge cases

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.
- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Prefer small, frequent changes over large content drops.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
