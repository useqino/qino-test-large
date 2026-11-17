---
title: "A Checklist for Draft Handling Aimed at Enterprises"
created-on: "2023-04-10T02:00:00Z"
updated-on: "2023-04-20T02:00:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/hanna-voss.json"
category: "categories/markdown.json"
---

If you work with enterprises, you have probably met draft handling in its least friendly form: undocumented, half-automated, and owned by nobody.

## Where it goes wrong

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```ts
const Schema = z.object({ title: z.string().min(1) }).strict();
```

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
