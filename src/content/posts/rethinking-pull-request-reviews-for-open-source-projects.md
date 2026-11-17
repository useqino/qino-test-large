---
title: "Rethinking Pull Request Reviews for Open Source Projects"
created-on: "2025-05-11T07:00:00Z"
updated-on: "2025-06-17T07:00:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/jane-doe.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about pull request reviews. It grew, because every answer raised two more questions.

## What to try next

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
