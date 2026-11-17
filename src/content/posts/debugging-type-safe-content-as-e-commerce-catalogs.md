---
title: "Debugging Type-Safe Content as E-commerce Catalogs"
created-on: "2021-07-17T03:00:00Z"
updated-on: "2021-09-14T03:00:00Z"
image: "/images/rolling-hills.webp"
author: "authors/mei-tanaka.json"
category: "categories/migration.json"
---

There is a quiet consensus that type-safe content is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## The checklist

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

## Trade-offs

Relations between entries deserve the same care as the entries themselves. A dangling reference is a bug, even if nothing renders it today.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
