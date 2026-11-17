---
title: "Ten Questions About Code Highlighting from News Publishers"
created-on: "2022-11-07T11:00:00Z"
updated-on: "2022-12-04T11:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/tomas-silva.json"
category: "categories/type-safety.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## In practice

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## The checklist

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
