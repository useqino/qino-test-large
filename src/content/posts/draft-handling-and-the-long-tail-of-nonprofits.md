---
title: "Draft Handling and the Long Tail of Nonprofits"
created-on: "2025-05-23T04:00:00Z"
updated-on: "2025-06-13T04:00:00Z"
image: "/images/golden-hillside.webp"
author: "authors/hanna-voss.json"
category: "categories/migration.json"
---

There is a quiet consensus that draft handling is solved. Spend a week with nonprofits and that consensus falls apart quickly.

## Trade-offs

Measure before optimizing. Most of the time the slow part is not the part everyone suspects.

The first principle is boring on purpose: keep the source of truth in plain files. Anything a tool can generate from those files should be generated, not hand-maintained.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## What we changed

Naming matters more than it seems. A stable, predictable filename is an API contract with every link, redirect, and bookmark that will ever point at it.

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
