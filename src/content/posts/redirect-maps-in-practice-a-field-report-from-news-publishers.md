---
title: "Redirect Maps in Practice: A Field Report from News Publishers"
created-on: "2022-09-27T06:00:00Z"
updated-on: "2022-10-06T06:00:00Z"
image: "/images/farm-landscape.webp"
author: "authors/mei-tanaka.json"
category: "categories/markdown.json"
---

This post started as a short note to a colleague about redirect maps. It grew, because every answer raised two more questions.

## Where it goes wrong

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
