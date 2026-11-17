---
title: "The Hidden Cost of Content Migrations for Marketing Sites"
created-on: "2024-05-21T12:15:00Z"
updated-on: "2024-05-27T12:15:00Z"
image: "/images/farm-landscape.webp"
author: "authors/yuki-sato.json"
category: "categories/content-modeling.json"
---

If you work with marketing sites, you have probably met content migrations in its least friendly form: undocumented, half-automated, and owned by nobody.

## A simpler model

Validation belongs at the edge. When a file enters the repository it should either match the schema or fail loudly, with a message that names the field and the file.

Keep the escape hatches visible. Every abstraction eventually meets a case it did not anticipate, and the fallback should be obvious rather than clever.

```yaml
title: "Example"
author: "authors/jane-doe.json"
```

## Where it goes wrong

Performance budgets help here. Decide up front how long a build may take, and treat a regression like any other failing test.

Start with one change from this list, ship it, and see what breaks. That is usually the fastest way to learn what matters.
