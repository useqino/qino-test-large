---
title: "Code Highlighting: Lessons from Open Source Projects"
created-on: "2022-09-03T19:15:00Z"
updated-on: "2022-09-08T19:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/diego-moreno.json"
category: "categories/architecture.json"
---

This post started as a short note to a colleague about code highlighting. It grew, because every answer raised two more questions.

## What to try next

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

```bash
pnpm qino build
pnpm next build
```

## Trade-offs

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Edge cases

Review is where quality actually happens. A small diff that a human can read in a minute beats a large one that everyone approves without opening.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
