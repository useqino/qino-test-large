---
title: "Notes on Code Highlighting for Internal Wikis"
created-on: "2025-10-31T11:15:00Z"
updated-on: "2025-12-07T11:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/raj-patel.json"
category: "categories/editorial.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What we changed

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Delete unused entries instead of hiding them.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.
- Keep one schema per collection and version it with the content.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
