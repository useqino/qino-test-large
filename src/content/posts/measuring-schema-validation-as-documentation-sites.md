---
title: "Measuring Schema Validation as Documentation Sites"
created-on: "2022-01-04T09:45:00Z"
updated-on: "2022-02-23T09:45:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/raj-patel.json"
category: "categories/migration.json"
---

Most teams only notice schema validation once something breaks. By then the fix is expensive, and the conversation is about blame rather than design.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```bash
pnpm qino build
pnpm next build
```

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Edge cases

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
