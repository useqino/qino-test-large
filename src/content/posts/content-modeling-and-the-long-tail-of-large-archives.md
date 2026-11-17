---
title: "Content Modeling and the Long Tail of Large Archives"
created-on: "2022-12-21T18:15:00Z"
updated-on: "2023-01-07T18:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/lars-eriksson.json"
category: "categories/markdown.json"
---

Most teams only notice content modeling once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

- Generate types from the schema rather than writing them twice.
- Make the default path the correct one for editors.
- Store media next to the content that uses it, or in one well-named folder.
- Fail the build on broken relations instead of logging a warning.

## Trade-offs

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

If you take one thing away, make it this: decide on purpose, and write the decision down.
