---
title: "A Second Look at Content Versioning for Enterprises"
created-on: "2022-06-11T08:45:00Z"
updated-on: "2022-07-23T08:45:00Z"
image: "/images/grass-field-clouds.webp"
author: "authors/priya-krishnan.json"
category: "categories/architecture.json"
---

There is a quiet consensus that content versioning is solved. Spend a week with enterprises and that consensus falls apart quickly.

## What to try next

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

Treat content like code, but not exactly like code. Writers need fast feedback and forgiving tools; the pipeline can be strict once the draft is ready.

```bash
pnpm qino build
pnpm next build
```

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
