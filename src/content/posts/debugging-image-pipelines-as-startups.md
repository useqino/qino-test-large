---
title: "Debugging Image Pipelines as Startups"
created-on: "2023-11-19T12:15:00Z"
updated-on: "2023-12-08T12:15:00Z"
image: "/images/golden-hillside.webp"
author: "authors/felix-berger.json"
category: "categories/philosophy.json"
---

If you work with startups, you have probably met image pipelines in its least friendly form: undocumented, half-automated, and owned by nobody.

## In practice

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

- Keep one schema per collection and version it with the content.
- Document every field that is not self-explanatory.
- Run the same checks locally and in CI.
- Prefer small, frequent changes over large content drops.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
