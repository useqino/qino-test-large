---
title: "Headless CMSes Patterns That Work for E-commerce Catalogs"
created-on: "2020-12-03T19:15:00Z"
updated-on: "2020-12-11T19:15:00Z"
image: "/images/fields-at-sunset.webp"
author: "authors/priya-krishnan.json"
category: "categories/type-safety.json"
---

There is a quiet consensus that headless cmses is solved. Spend a week with e-commerce catalogs and that consensus falls apart quickly.

## What we changed

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

The editor experience is part of the system. If the right thing is hard to do, people will do the easy thing instead, and the content will drift.

```bash
pnpm qino build
pnpm next build
```

## Edge cases

Automation is only useful when it is predictable. A script that does the right thing ninety percent of the time is worse than no script, because people stop checking.

Write down the conventions. A short document that explains why the folders look the way they do saves more time than any tool.

None of this is glamorous. It is the kind of work that makes the glamorous work possible.
