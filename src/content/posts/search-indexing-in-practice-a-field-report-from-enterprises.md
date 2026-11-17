---
title: "Search Indexing in Practice: A Field Report from Enterprises"
created-on: "2022-02-01T19:30:00Z"
updated-on: "2022-03-19T19:30:00Z"
image: "/images/golden-hillside.webp"
author: "authors/amara-okonkwo.json"
category: "categories/content-modeling.json"
---

There is a quiet consensus that search indexing is solved. Spend a week with enterprises and that consensus falls apart quickly.

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

## A simpler model

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

## What to try next

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

- Prefer small, frequent changes over large content drops.
- Run the same checks locally and in CI.
- Delete unused entries instead of hiding them.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
