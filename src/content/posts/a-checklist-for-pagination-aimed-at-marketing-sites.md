---
title: "A Checklist for Pagination Aimed at Marketing Sites"
created-on: "2021-08-24T14:30:00Z"
updated-on: "2021-09-15T14:30:00Z"
image: "/images/mountain-river.webp"
author: "authors/jane-doe.json"
category: "categories/markdown.json"
---

We rebuilt our approach to pagination three times last year. Here is what survived.

## A simpler model

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

- Generate types from the schema rather than writing them twice.
- Document every field that is not self-explanatory.
- Delete unused entries instead of hiding them.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## In practice

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

- Keep one schema per collection and version it with the content.
- Fail the build on broken relations instead of logging a warning.
- Make the default path the correct one for editors.

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
