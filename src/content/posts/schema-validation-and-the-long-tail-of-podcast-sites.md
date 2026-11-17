---
title: "Schema Validation and the Long Tail of Podcast Sites"
created-on: "2021-07-05T13:30:00Z"
updated-on: "2021-08-25T13:30:00Z"
image: "/images/tranquil-mountains.webp"
author: "authors/camille-laurent.json"
category: "categories/philosophy.json"
---

Most teams only notice schema validation once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## In practice

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## A simpler model

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

## Where it goes wrong

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
