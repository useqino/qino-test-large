---
title: "The Case for Folder Structure Among Design Systems"
created-on: "2023-02-25T12:30:00Z"
updated-on: "2023-04-19T12:30:00Z"
image: "/images/andalusian-countryside.webp"
author: "authors/diego-moreno.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about folder structure. It grew, because every answer raised two more questions.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

- Make the default path the correct one for editors.
- Prefer small, frequent changes over large content drops.
- Document every field that is not self-explanatory.
- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What we changed

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
