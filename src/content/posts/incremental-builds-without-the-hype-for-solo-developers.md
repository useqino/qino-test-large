---
title: "Incremental Builds Without the Hype, for Solo Developers"
created-on: "2026-05-05T16:00:00Z"
updated-on: "2026-05-12T16:00:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/lars-eriksson.json"
category: "categories/migration.json"
---

This post started as a short note to a colleague about incremental builds. It grew, because every answer raised two more questions.

## What we changed

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
