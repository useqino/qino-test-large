---
title: "Measuring Author Profiles as Small Teams"
created-on: "2020-11-07T15:30:00Z"
updated-on: "2020-12-13T15:30:00Z"
image: "/images/snowy-croplands.webp"
author: "authors/yuki-sato.json"
category: "categories/architecture.json"
---

author profiles sounds like a detail. It is actually a decision that shapes how every future change lands.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

```bash
pnpm qino build
pnpm next build
```

## What to try next

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
