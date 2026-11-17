---
title: "Small Wins in Search Indexing for Agencies"
created-on: "2023-12-07T06:45:00Z"
updated-on: "2024-01-23T06:45:00Z"
image: "/images/golden-hillside.webp"
author: "authors/lars-eriksson.json"
category: "categories/architecture.json"
---

If you work with agencies, you have probably met search indexing in its least friendly form: undocumented, half-automated, and owned by nobody.

## Trade-offs

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## A simpler model

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```bash
pnpm qino build
pnpm next build
```

The goal is not perfection. It is a system where mistakes are cheap to spot and cheap to fix.
