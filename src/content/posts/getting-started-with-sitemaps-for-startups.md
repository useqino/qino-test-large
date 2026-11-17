---
title: "Getting Started with Sitemaps for Startups"
created-on: "2022-10-07T10:45:00Z"
updated-on: "2022-11-10T10:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/diego-moreno.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about sitemaps. It grew, because every answer raised two more questions.

## Edge cases

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

## What we changed

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

- Document every field that is not self-explanatory.
- Cache by content hash, not by timestamp.
- Prefer small, frequent changes over large content drops.
- Store media next to the content that uses it, or in one well-named folder.
- Generate types from the schema rather than writing them twice.

## Where it goes wrong

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
